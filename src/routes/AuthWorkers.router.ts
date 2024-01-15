import express from "express";
import { AuthArtistController } from "../controllers/AuthArtistController";

// -----------------------------------------------------------------------------

const router = express.Router();
const authArtistController = new AuthArtistController();

router.post("/register", authArtistController.register);
router.post("/login", authArtistController.login);

export default router;