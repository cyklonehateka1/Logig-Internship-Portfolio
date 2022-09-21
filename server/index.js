import express, { application, json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    throw error;
  }
};

app.use(cors());
app.use(json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const erroMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: erroMessage,
    stack: err.stack,
  });
});

app.listen(2011, () => {
  connection();
  console.log("Server started at port 2011");
});
