import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";
import Logger from "@ioc:Adonis/Core/Logger";

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      const token = await auth.use("api").attempt(email, password, {
        expiresIn: "10 days",
      });
        return response.status(200).json({ data: token.toJSON() });
    } catch (error) {
      Logger.error({ err: new Error(error) }, "User login failed");
      return error.message;
    }
  }
  public async register({ request, auth }: HttpContextContract) {
    const username = request.input("username");
    const email = request.input("email");
    const password = request.input("password");
    const type = request.input("type");
    const first_name = request.input("first_name");
    const last_name = request.input("first_name");
    const address = request.input("address");
    const contact_number = request.input("contact_number");
    const status = request.input("status");

    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.type = type;
    newUser.first_name = first_name;
    newUser.last_name = last_name;
    newUser.address = address;
    newUser.contact_number = contact_number;
    newUser.status = status;
    try {
      await newUser.save();
      const token = await auth.use("api").login(newUser, {
        expiresIn: "10 days",
      });
      return token.toJSON();
    } catch (error) {
      Logger.error({ err: new Error(error) }, "User register failed");
      return error.message;
    }
  }
}
