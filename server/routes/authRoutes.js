import express from "express";
import { registerController } from "../controller/authController.js";

const router = express.Router();

router.post("/signup", registerController);

// router.post("/login", loginController);

export default router;
