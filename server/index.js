import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import internRoutes from "./routes/internRoutes.js";
dotenv.config();

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection successfull");
  } catch (err) {
    throw err;
  }
};

app.use(cors());
app.use(json());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/interns", internRoutes);

app.use((err, req, res, next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
});

app.listen(8000, () => {
  connect();
  console.log("Server started on Port 8000");
});
