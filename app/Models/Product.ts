import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import ProductCategory from "./ProductCategory";
import ProductSubCategory from "./ProductSubCategory";

enum day_type {
  admin = "admin",
  user = "user",
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
}
export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public user_id: number;

  @column()
  public userId: number;

  @column()
  public day_type: day_type;

  @column()
  public product_category_id: number;

  @column()
  public productCategoryId: number;

  @column()
  public product_sub_category_id: number;

  @column()
  public productSubCategoryId: number;

  @column()
  public calender_days: string;

  @column()
  public title: string;

  @column()
  public description: string;

  @column()
  public address: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  // Relationship
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;

  // Relationship
  @belongsTo(() => ProductCategory)
  public productCategory: BelongsTo<typeof ProductCategory>;

  // Relationship
  @belongsTo(() => ProductSubCategory)
  public productSubCategory: BelongsTo<typeof ProductSubCategory>;
}
