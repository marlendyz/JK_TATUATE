import { Request, Response } from "express";

// -----------------------------------------------------------------------------

export interface Controller {
    getAll(req: Request, res: Response): Promise<void | Response<any>>;
    getById(req: Request, res: Response): Promise<void | Response<any>>;
   
 }
 