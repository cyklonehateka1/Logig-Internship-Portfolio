import InternModel from "../models/InternModel.js";
import { errorHandler } from "../errorHandler.js";

export const createIntern = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      const {
        img,
        name,
        email,
        projects,
        linkedin,
        skills,
        twitter,
        instagram,
        bio,
        education,
        hobbies,
      } = req.body;

      if (!name || !email || !linkedin)
        return next(errorHandler(400, "Some fields are required"));

      const intern = await InternModel.findOne({ email });

      if (intern) return next(errorHandler(400, "Email already used"));

      const newIntern = new InternModel({
        img,
        name,
        email,
        projects,
        linkedin,
        twitter,
        instagram,
        bio,
        skills,
        education,
        hobbies,
      });

      await newIntern.save();

      res.status(201).json(newIntern);
    } else {
      return next(errorHandler(403, "You are not authorized"));
    }
  } catch (err) {
    return next(err);
  }
};

export const getAllInterns = async (req, res, next) => {
  try {
    const queryByLimit = req.query.limit;
    const queryBySearch = req.query.search;
    const skip = req.query.skip;

    let interns;
    if (queryByLimit) {
      interns = await InternModel.find()
        .sort({ createdAt: -1 })
        .limit(queryByLimit);
      res.status(200).json(interns);
    }

    if (queryBySearch) {
      interns = await InternModel.find({
        $regex: queryBySearch,
        $options: "i",

        $or: [
          {
            name: {
              $regex: queryBySearch,
              $options: "i",
            },
          },
          {
            education: {
              $regex: queryBySearch,
              $options: "i",
            },
          },

          {
            education: {
              $regex: queryBySearch,
              $options: "i",
            },
          },
        ],
      });
      res.status(200).json(interns);
    }
    const AllInterns = await InternModel.find();
    res.status(200).json(AllInterns);
  } catch (err) {
    return next(err);
  }
};

// const getInternByQuery = async (req, res, next) => {
//   const queryByNumber = req.query.new;
//   const queryBySearch = req.query.new;

//   try {
//     if (queryByNumber) {
//       let interns = await ProductModel.find().sort({ createdAt: -1 }).limit(5);
//     }
//   } catch (error) {}
// };

export const getIntern = async (req, res, next) => {
  const intern = await InternModel.findById(req.params.id);
  res.status(200).json(intern);
};

export const updateIntern = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      let intern = await InternModel.findById(req.params.id);
      if (!intern)
        return next(errorHandler(401, "You can update your account only"));
      intern = await InternModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(intern);
    } else {
      return next(errorHandler(403, "You are not authorized"));
    }
  } catch (err) {
    return next(err);
  }
};
