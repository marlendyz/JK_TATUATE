import express from "express";
import { AppointmentController } from "../controllers/AppointmentController";

// ----
const router = express.Router();
const appointmentController = new AppointmentController();

router.get("/", appointmentController.getAll);
router.post("/", appointmentController.create);
router.patch("/:id", appointmentController.update);
router.delete("/:id", appointmentController.delete);

router.get("/users/:id", appointmentController.getById);
router.get("/worker/:id", appointmentController.getByWorker);

export default router;
