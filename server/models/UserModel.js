import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
      unique: true,
    },
    portfolio: {
      type: [String],
    },
    linkedin: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
