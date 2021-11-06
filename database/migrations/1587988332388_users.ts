import BaseSchema from "@ioc:Adonis/Lucid/Schema";


export default class UsersSchema extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("username", 255).notNullable().unique();
      table.string("email", 255).notNullable().unique();
      table.string("password", 180).notNullable();
      table.string("remember_me_token").nullable();
      table.enum("type", ["admin", "user"]);
      table.string("first_name", 255).notNullable();
      table.string("last_name", 255).notNullable();
      table.text("address").notNullable();
      table.string("contact_number", 255).notNullable();
      table.enum("status", ["admin", "user"]);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
