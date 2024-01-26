import express from "express";
import userRoutes from "./routes/users.routes";
import authUserouter from "./routes/AuthUser.router"
import  AuthWorkRoutes from "./routes/AuthWorkers.router";
import appointmentRoutes from "./routes/AuthAppointments.router";


// -----------------------------------------------------------------------------

const router = express.Router();


router.use("/authUser", authUserouter);
router.use("/api/users",userRoutes);
router.use("/authWor", AuthWorkRoutes);
router.use("/appointment", appointmentRoutes);




export default router;
