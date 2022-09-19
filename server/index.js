import express, { application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(2011, () => {
  connection();
  console.log("Server started at port 2011");
});
