import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Logger from "@ioc:Adonis/Core/Logger";

export default class UsersController {
    public async ProductsByUser({ auth }: HttpContextContract) {
        try {
           const user = await auth.authenticate();
           await user.preload("product");
           const products = user.product;
           return products;
        } catch (error) {
            Logger.error({ err: new Error(error) }, "failed, An error occurred");
            return error.message;
      }
   
  }
}
