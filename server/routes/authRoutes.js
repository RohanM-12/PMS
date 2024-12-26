import express from "express";
import {
  loginController,
  registerController,
} from "../controller/authController.js";

const router = express.Router();

router.post("/signup", registerController);
router.post("/login", loginController);

// router.post("/login", loginController);

export default router;
