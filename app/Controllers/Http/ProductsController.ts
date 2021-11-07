import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";
import ProductCategory from "App/Models/ProductCategory";
import ProductSubCategory from "App/Models/ProductSubCategory";

export default class ProductsController {
  public async index(
    {  response }: HttpContextContract
  ) {
    try {
      // const products = await Product.query().preload("user")
      //   .preload("productCategory")
      //   .preload("productSubCategory");
      const products = await Product.query()
      
      return response.status(200).json({ data: products });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const product = await Product.find(params.id);
      if (product) {
        return response.status(200).json({ data: product });
      }
      return response.status(404).json({
        message: `No Product match the provided ID`,
      });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async update({
    // auth,
    request,
    response,
    params,
  }: HttpContextContract) {
    // const user = await auth.authenticate();
    const product = await Product.find(params.id);

    if (product) {
      product.day_type = request.input("day_type");
      product.product_category_id = request.input("product_category_id");
      product.product_sub_category_id = request.input(
        "product_sub_category_id"
      );
      product.calender_days = request.input("calender_days");
      product.title = request.input("title");
      product.description = request.input("description");
      product.address = request.input("address");

      try {
        await product.save();
        await product.preload("user");
        await product.preload("productCategory");
        await product.preload("productSubCategory");
        return response.status(200).json({ data: product });
      } catch (error) {
        return response.status(500).json({ message: `${error.message}` });
      }
    }
    return response.status(404).json({
      message: `No Product match the provided ID`,
    });
  }

  public async store({ auth, request, response }: HttpContextContract) {
    try {
      const user = await auth.authenticate();
        const product = new Product();
      product.user_id = user.id;
      product.userId = user.id;
      product.day_type = request.input("day_type");
      product.product_category_id = request.input("product_category_id");
      product.productCategoryId = request.input("product_category_id");
      product.product_sub_category_id = request.input(
        "product_sub_category_id"
      );
      product.productSubCategoryId = request.input(
        "product_sub_category_id"
      );
      product.calender_days = request.input("calender_days");
      product.title = request.input("title");
      product.description = request.input("description");
        product.address = request.input("address");
        
        const productCategory = await ProductCategory.findOrFail(
          product.product_category_id
        );
        const productSubCategory = await ProductSubCategory.findOrFail(
          product.product_sub_category_id
        );
      

      let userProduct = await user.related("product").save(product);
      await productCategory.related("product").save(product);
      await productSubCategory.related("product").save(product);


      // let ResolvedSave = await Promise.allSettled([userProduct, categoryProduct, subCategoryProduct])

      console.log(userProduct)
      return response.status(201).json({ data: product });
    } catch (error) {
      console.log("products : ", error);
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      // const user = await auth.authenticate();
      const product = await Product.query()
        .where("id", params.id)
          .delete();
        
      if (product) {
        return response.status(200).json({
          data: null,
        });
      }
      return response
        .status(404)
        .json({ message: "No Product match the provided ID" });
    } catch (error) {
      return response
        .status(500)
        .json({ message: `An error occured: ${error.message}` });
    }
  }
}
