import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();
const port = 5000;
connectDB(process.env.MONGODB_URL);

app.use("/api/auth", authRoutes);
app.use("/api/user", doctorRoutes);
app.use("/api/appointment", appointmentRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
