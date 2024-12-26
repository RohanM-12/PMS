import userModel from "../models/userModel.js";

export const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await userModel.find({ role: 1 });

    if (!doctors || doctors.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No doctors found",
      });
    }

    res.status(200).send({
      success: true,
      message: "Doctors retrieved successfully",
      doctors,
    });
  } catch (error) {
    console.error("Error fetching doctors:", error);

    res.status(500).send({
      success: false,
      message: "Error retrieving doctors",
      error: error.message,
    });
  }
};
