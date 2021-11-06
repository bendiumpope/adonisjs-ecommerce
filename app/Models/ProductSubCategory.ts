import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product';
import ProductCategory from './ProductCategory';

export default class ProductSubCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public product_category_id: number;

  @column()
  public productCategoryId: number;

  @column()
  public status: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  // Relationship
  @belongsTo(() => ProductCategory)
  public productCategory: BelongsTo<typeof ProductCategory>;

  @hasMany(() => Product)
  public product: HasMany<typeof Product>;
}
