import userModel from "../models/userModel.js";
import { hashPassword } from "../util/utility.js";

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
    } = req.body;

    // Validate common fields
    if (!name) return res.status(400).send({ message: "Name is required" });
    if (!email) return res.status(400).send({ message: "Email is required" });
    if (!password)
      return res.status(400).send({ message: "Password is required" });
    if (!phone) return res.status(400).send({ message: "Phone is required" });
    if (!address)
      return res.status(400).send({ message: "Address is required" });

    // Check user role and validate role-specific fields
    const userRole = parseInt(role); // 1 = doctor, 0 = patient

    if (userRole === 1) {
      // Validate doctor-specific fields
      if (!qualification)
        return res.status(400).send({ message: "Qualification is required" });
      if (!speciality)
        return res.status(400).send({ message: "Speciality is required" });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already registered, please login",
      });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create new user object based on role
    const userData = {
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role: userRole,
    };

    if (userRole === 1) {
      // Add doctor-specific fields
      userData.qualification = qualification;
      userData.speciality = speciality;
    }

    // Save user in the database
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
