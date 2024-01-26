import express from "express";
import userRoutes from "./routes/users.routes";
import authUserouter from "./routes/AuthUser.router"
import  AuthWorkRoutes from "./routes/AuthWorkers.router";


// -----------------------------------------------------------------------------

const router = express.Router();


router.use("/authUser", authUserouter);
router.use("/api/users",userRoutes);
router.use("/authWor", AuthWorkRoutes);
router.use("/api/users/:id", userRoutes);
router.use("/api/users/:id", userRoutes);



export default router;
