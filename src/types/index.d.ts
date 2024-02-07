import { Tatuate_workers } from "./types";

declare global{
    namespace Express {
        export interface Request {
            tokenData: Tatuate_workersTokenData;
        }
    }
}