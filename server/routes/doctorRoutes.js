import express from "express";
import { getAllDoctorsController } from "../controller/doctorController.js";

const router = express.Router();

router.get("/doctors", getAllDoctorsController);

export default router;
