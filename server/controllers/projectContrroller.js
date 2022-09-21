import ProjectModel from "../models/ProjectModel";
import { errorHandler } from "../errorHandler";

export const createProject = async (req, res, next) => {
  try {
    const { name, desc, img } = req.body;
    if (!name || !desc || !img)
      return next(errorHandler(400, "Please all fields are required"));
    const newProject = new ProjectModel({ name, desc, img });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    return next(err);
  }
};
