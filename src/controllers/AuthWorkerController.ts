import { Request, Response } from "express";
import { CreateWorkersRequestBody, LoginUserRequestBody, WorkerTokenData } from "../types/types";
import { Tatuate_workers } from "../models/Tatuate_workers";
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";


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
        message: "Worker created succesfully",
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while creating Worker",
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
      const worker = await workerRepository.findOne({
        where: {
          email: email,
        },
      });
      if (!worker) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad email or password",
        });
      }
      const isPasswordValid = bcrypt.compareSync(password, worker.password);

      if (!isPasswordValid) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Bad email or password",
        });
      }
      
      const tokenPayload : WorkerTokenData={
        tatuate_worker_id : worker.id?.toString() as string,

      }

      const token = jwt.sign(tokenPayload, "123",{
        expiresIn: "3h"
      });


      res.status(StatusCodes.OK).json({
        message: "login succesfully",
        token
      });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Error while login",
      });
    }
  }
}
