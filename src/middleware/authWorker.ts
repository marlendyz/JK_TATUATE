import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload, decode } from "jsonwebtoken";
import { WorkerTokenData,  } from "../types/types";
// -----------------------------------------------------------------------------
export const authWorker = (req: Request, res: Response, next: NextFunction) => {
   req.headers;
   const token = req.headers.authorization?.split(" ")[1];
   console.log(token)
   if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
         message: "Unauthorized",
      });
   }
   try {
      const decoded = jwt.verify(token, "123") as JwtPayload;

      const decodedPayload: WorkerTokenData = {
         tatuate_worker_id: decoded.tatuate_worker_id,
        
      };

      req.tokenData = decodedPayload;
      
      next();
   } catch (error) {
      res.status(StatusCodes.UNAUTHORIZED).json({
         message: "Unauthorized",
      });
   }
};