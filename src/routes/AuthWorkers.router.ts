import express from "express";
import {AuthWorkController} from "../controllers/AuthWorkerController";
import { AuthUserController } from "../controllers/AuthUserController";

// -----------------------------------------------------------------------------

const router = express.Router();
const AuthWorkerController = new AuthWorkController();

router.post("/register", AuthWorkerController.register);
router.post("/login", AuthWorkerController.login);

export default router;