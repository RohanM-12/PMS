import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

const app = express();
dotenv.config();
const port = 5000;
connectDB(process.env.MONGODB_URL);
// app.use(express().json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRoutes);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
