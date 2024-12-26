import express from "express";
import connectDB from "./db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
const port = 5000;
connectDB(process.env.MONGODB_URL);
// app.use(express().json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
