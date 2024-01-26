import express from "express";
import { AuthUserController } from "../controllers/AuthUserController";

// -----------------------------------------------------------------------------

const router = express.Router();
const authUserController = new AuthUserController();

router.post("/register", authUserController.register);
router.post("/login", authUserController.login);

export default router;
