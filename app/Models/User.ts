import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Product from './Product';

enum user_type_enum {
  admin = "admin",
  user = "user"
}

enum user_status_enum {
  admin = "admin",
  user = "user",
}

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken?: string;

  @column()
  public type: user_type_enum;

  @column()
  public first_name: string;

  @column()
  public last_name: string;

  @column()
  public address: string;

  @column()
  public contact_number: string;

  @column()
  public status: user_status_enum;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Product)
  public product: HasMany<typeof Product>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
