import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Products extends BaseSchema {
  protected tableName = "products";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary()
      table.integer("user_id").notNullable()
      table.integer("userId").unsigned().references("users.id").nullable()
      table.enum("day_type", [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
      ]).notNullable()
      table.integer("product_category_id").notNullable()
      table.integer("productCategoryId").unsigned().references('product_categories.id').nullable()

      table.integer("product_sub_category_id").notNullable();
      table.integer("productSubCategoryId").unsigned().references("product_sub_categories.id").nullable()

      table.text("calendar_days").notNullable()
      table.string("title", 250).notNullable()
      table.text("description").notNullable()
      table.string("address", 250).notNullable()
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
