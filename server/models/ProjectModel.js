import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    required: true,
    type: String,
  },
});

export default mongoose.model("Project", ProjectSchema);
