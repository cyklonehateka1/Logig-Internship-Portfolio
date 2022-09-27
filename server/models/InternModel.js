import mongoose from "mongoose";

const InternSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: true,
    unique: true,
  },
  projects: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          unique: true,
        },
      },
    ],
  },
  linkedin: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  education: {
    type: String,
  },
  hobbies: {
    type: [String],
  },
  skills: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

export default mongoose.model("Intern", InternSchema);
