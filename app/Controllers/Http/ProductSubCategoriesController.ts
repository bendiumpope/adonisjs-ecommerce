import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ProductCategory from "App/Models/ProductCategory";
import ProductSubCategory from "App/Models/ProductSubCategory";

export default class ProductSubCategoriesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const productSubCategory = await ProductSubCategory.query().preload(
        "productCategory"
      );
      return response.status(200).json({ data: productSubCategory });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async show({ request, response, params }: HttpContextContract) {
    try {
      const productSubCategory = await ProductSubCategory.find(params.id);
      if (productSubCategory) {
        await productSubCategory.preload("productCategory");

        return response.status(200).json({ data: productSubCategory });
      }
      return response.status(404).json({
        message: `No Product_Sub_Category match the provided ID`,
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
    const productSubCategory = await ProductSubCategory.find(params.id);

    if (productSubCategory) {
      productSubCategory.name = request.input("name");
      productSubCategory.status = request.input("status");
      try {
        await productSubCategory.save();
        await productSubCategory.preload("productCategory");
        return response.status(200).json({ data: productSubCategory });
      } catch (error) {
        return response.status(500).json({ message: `${error.message}` }); // 422
      }
    }

    return response.status(404).json({
      message: `No Product_Sub_Category match the provided ID`,
    });
  }

  public async store({ auth, response, request }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
      const productCategoryId = request.input("product_category_id");
      const productCategory = await ProductCategory.findOrFail(productCategoryId);
      const productSubCategory = new ProductSubCategory();
      productSubCategory.name = request.input("name");
      productSubCategory.product_category_id = request.input(
        "product_category_id"
      );

      productSubCategory.status = request.input("status");
    await productCategory.related("productSubCategory").save(productSubCategory);
        
        

      return response.status(201).json({ data: productSubCategory });
    } catch (error) {
      console.log("B4 savedProductSubCategory :....", error);
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async destroy({ response, auth, params }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
      const productSubCategory = await ProductSubCategory.query()
        .where("id", params.id)
        .delete();

      if (productSubCategory) {
        return response.status(201).json({
          data: null,
        });
      }

      return response
        .status(404)
        .json({ message: "No Product_Sub_Category match the provided ID" });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }
}
