import { Request, Response } from "express";
import {
  CreateUserRequestBody,
  LoginUserRequestBody,
  TokenData,
} from "../types/types";
import { User } from "../models/User";
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";

export class AuthUserController {
  async register(
    req: Request<{}, {}, CreateUserRequestBody>,
    res: Response
  ): Promise<void | Response<any>> {
    const { username, first_name, last_name, password, email } = req.body;

    const userRepository = AppDataSource.getRepository(User);

    try {
      const newUser: User = {
        username,
        first_name,
        last_name,
        email,
        password: bcrypt.hashSync(password, 10),
      };

      await userRepository.save(newUser);

      res.status(StatusCodes.CREATED).json({
        message: "User created succesfully",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while creating user",
      });
    }
  }
  async login(
    req: Request<{}, {}, LoginUserRequestBody>,
    res: Response
  ): Promise<void | Response<any>> {
    const { password, email } = req.body;

    const userRepository = AppDataSource.getRepository(User);
    try {
      if (!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Email or password is required",
        });
      }
      const user = await userRepository.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad email or password",
        });
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad email or password",
        });
      }

      res.status(StatusCodes.OK).json({
        message: "login succesfully",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while login",
      });
    }
  }
}
