import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming 'User' is the model name for doctors
      required: true,
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming 'User' is the model name for patients
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    charges: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0, // Default discount to 0 if not applied
    },
    totalAmount: {
      type: Number,
      required: true, // Calculate charges - discount
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
      default: "Pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
