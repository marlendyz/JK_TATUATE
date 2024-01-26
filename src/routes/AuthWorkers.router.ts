import express from "express";
import { AuthWorkController } from "../controllers/AuthWorkerController";

// -----------------------------------------------------------------------------

const router = express.Router();
const AuthWorkerController = new AuthWorkController();

router.post("/register", AuthWorkerController.register);
router.post("/login", AuthWorkerController.login);

export default router;
