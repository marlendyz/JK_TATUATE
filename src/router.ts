import express from "express";
import userRoutes from "./routes/users.routes";
import authUserouter from "./routes/AuthUser.router"
import { AuthWorrouter } from "./router/AuthWorkerrouter";


// -----------------------------------------------------------------------------

const router = express.Router();

// User routes
router.use("/authUser", authUserouter);
router.use("/api/users",userRoutes);
router.use("/api/users/:id", userRoutes);
router.use("/api/users/:id", userRoutes);
router.use("/api/users/:id", userRoutes);

// artis routes

router.use("/authWorkerrouter", AuthWorrouter);


export default router;
