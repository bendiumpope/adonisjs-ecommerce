import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductCategories extends BaseSchema {
  protected tableName = 'product_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string("name", 255).notNullable().unique()
      table.integer("status").notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
