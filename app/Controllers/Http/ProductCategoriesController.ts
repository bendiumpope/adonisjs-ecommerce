import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ProductCategory from "App/Models/ProductCategory";
import ProductSubCategory from "App/Models/ProductSubCategory";

export default class ProductCategoriesController {
  public async index(
    { request, response }: HttpContextContract
  ) {
    try {
      const productCategories = await ProductCategory.query();
      return response.status(200).json({ data: productCategories });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async show({ request, response, params }: HttpContextContract) {
    try {
      const productCategories = await ProductCategory.find(params.id);
      if (productCategories) {
        return response.status(200).json({ data: productCategories });
      }
      return response.status(404).json({
        message: `No Product_Category match the provided ID`,
      });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async update({
    auth,
    request,
    response,
    params,
  }: HttpContextContract) {
    const productCategories = await ProductCategory.find(params.id);

    if (productCategories) {
      productCategories.name = request.input("name");
      productCategories.status = request.input("status");
      try {
        await productCategories.save();

        return response.status(200).json({ data: productCategories });
      } catch (error) {
        return response.status(500).json({ message: `${error.message}` });
      }
    }
    return response.status(404).json({
      message: `No Product_Category match the provided ID`,
    });
  }

  public async store({ auth, request, response }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
      const productCategory = new ProductCategory();
      productCategory.name = request.input("name");
      productCategory.status = request.input("status");
      const savedProductCategory = await productCategory.save();
      return response.status(201).json({ data: savedProductCategory });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async destroy({ response, auth, params }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
      const productCategory = await ProductCategory.query()
        .where("id", params.id)
        .delete();

      const productSubCategory = await ProductSubCategory.query()
        .where("product_category_id", params.id)
        .delete();
      if (productSubCategory || productCategory) {
        return response.status(201).json({
          data: null,
        });
      }
      return response
        .status(404)
        .json({ message: "No Product_Category match the provided ID" });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }
}
