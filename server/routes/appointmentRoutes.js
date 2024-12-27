import express from "express";
import { saveAppointmentController } from "../controller/appointmentController.js";

const router = express.Router();

router.post("/book-appointment", saveAppointmentController);

export default router;
