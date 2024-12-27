import Appointment from "../models/appointmentModel.js";
import User from "../models/userModel.js";

export const saveAppointmentController = async (req, res) => {
  try {
    const { doctorId, patientId, appointmentDate, charges } = req.body;
    console.log(req.body);

    if (!doctorId || !patientId || !appointmentDate || !charges) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const existingDiscount = await Appointment.findOne({
      patientId,
      discount: { $gt: 0 },
    });

    let discount = 0;
    if (!existingDiscount) {
      discount = 0.1 * charges;
    } else {
      var discountMessage = "Discount already applied";
    }

    const totalAmount = charges - discount;

    const newAppointment = new Appointment({
      doctorId,
      patientId,
      appointmentDate,
      charges,
      discount,
      totalAmount,
    });

    await newAppointment.save();

    res.status(201).send({
      success: true,
      message: "Appointment booked successfully",
      appointment: newAppointment,
      discountMessage,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ success: false, message: "Error saving appointment", error });
  }
};
