import { Request, Response } from "express";
import { CreateWorkersRequestBody, LoginUserRequestBody } from "../types/types";
import { Tatuate_workers } from "../models/Tatuate_workers";
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";

export class AuthWorkController {
  async register(
    req: Request<{}, {}, CreateWorkersRequestBody>,
    res: Response
  ): Promise<void | Response<any>> {
    const { nickname, first_name, last_name, password, email } = req.body;

    const workerRepository = AppDataSource.getRepository(Tatuate_workers);

    try {
      const newArtist: Tatuate_workers = {
        nickname,
        first_name,
        last_name,
        email,
        password: bcrypt.hashSync(password, 10),
      };

      await workerRepository.save(newArtist);

      res.status(StatusCodes.CREATED).json({
        message: "Artist created succesfully",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while creating Artist",
      });
    }
  }
  async login(
    req: Request<{}, {}, LoginUserRequestBody>,
    res: Response
  ): Promise<void | Response<any>> {
    const { password, email } = req.body;

    const workerRepository = AppDataSource.getRepository(Tatuate_workers);
    try {
      if (!email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Email or password is required",
        });
      }
      const user = await workerRepository.findOne({
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
