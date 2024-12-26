import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../util/utility.js";
import JWT from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    console.log(req.body);
    const {
      name,
      email,
      password,
      phone,
      address,
      qualification,
      speciality,
      role,
      charges,
      discount,
    } = req.body;

    // Validate common fields
    if (!name) return res.status(400).send({ message: "Name is required" });
    if (!email) return res.status(400).send({ message: "Email is required" });
    if (!password)
      return res.status(400).send({ message: "Password is required" });
    if (!phone) return res.status(400).send({ message: "Phone is required" });
    if (!address)
      return res.status(400).send({ message: "Address is required" });

    const userRole = parseInt(role);

    if (userRole === 1) {
      if (!qualification)
        return res.status(400).send({ message: "Qualification is required" });
      if (!speciality)
        return res.status(400).send({ message: "Speciality is required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already registered, please login",
      });
    }

    const hashedPassword = await hashPassword(password);

    const userData = {
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role: userRole,
      charges,
      discount,
    };

    if (userRole === 1) {
      userData.qualification = qualification;
      userData.speciality = speciality;
    }

    const user = new userModel(userData);
    await user.save();

    res.status(201).send({
      success: true,
      message:
        userRole === 1
          ? "Doctor registered successfully"
          : "Patient registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ success: false, message: "Error in user registration", error });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    const token = await JWT.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const data = await userModel.findOne({ email });

    res.status(200).send({
      success: true,
      message: "logged in successfully",
      data,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });
  }
};
