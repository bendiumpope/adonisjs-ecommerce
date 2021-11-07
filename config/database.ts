/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'
const dataBaseString = require("../utils/DB_Helper");

const [user, password, host, port, database] =
  dataBaseString.GetHerokuConnectionString(Env.get("DATABASE_URL"));

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */

  connection: Env.get("DB_CONNECTION"),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for PostgreSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg
    |
    */
    pg: {
      client: "pg",
      migrations: {
      disableRollbacksInProduction: true,
    },
      connection: {
        host: Env.get("PG_HOST", host),
        port: Env.get("PG_PORT", port),
        user: Env.get("PG_USER", user),
        password: Env.get("PG_PASSWORD", password),
        database: Env.get("PG_DB_NAME", database),
      },
      healthCheck: false,
      debug: false,
    },
  },

  // connection: {
  //   host: Env.get("PG_HOST"),
  //   port: Env.get("PG_PORT"),
  //   user: Env.get("PG_USER"),
  //   password: Env.get("PG_PASSWORD", ""),
  //   database: Env.get("PG_DB_NAME"),
  // },

  /*
  |--------------------------------------------------------------------------
  | ORM Configuration
  |--------------------------------------------------------------------------
  |
  | Following are some of the configuration options to tweak the conventional
  | settings of the ORM. For example:
  |
  | - Define a custom function to compute the default table name for a given model.
  | - Or define a custom function to compute the primary key for a given model.
  |
  */
  orm: {},
};

export default databaseConfig
