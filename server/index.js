import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();

const connect = async () => {
  try {
    mongoose.connect();
  } catch (err) {}
};

app.listen(8000, () => {
  console.log("Server started on Port 8000");
});
