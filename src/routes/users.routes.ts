import express from "express";
import { UserController } from "../controllers/UserController";
import { AuthWorkController } from "../controllers/AuthWorkerController";
import { auth } from "../middleware/auth";

// -----------------------------------------------------------------------------

const router = express.Router();
const userController = new UserController();

router.get("/",auth, userController.getAll);
router.get("/:id",auth, userController.getById);
router.post("/", userController.create);
router.patch("/:id",auth, userController.update);
router.delete("/:id",auth, userController.delete);

export default router;
