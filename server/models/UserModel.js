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
      required: true,
      unique: true,
    },
    github: {
      type: String,
      required: true,
      unique: true,
    },
    portfolio: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    linkedin: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
