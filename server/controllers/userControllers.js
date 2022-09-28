import UserModel from "../models/UserModel.js";
import { errorHandler } from "../errorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { name, password, isAdmin, isSuperUser, email } = req.body;
    if (!name || !password || !email)
      return next(errorHandler(400, "Some fields are required"));

    const userIsAvailable = await UserModel.findOne({ email });

    if (userIsAvailable) return next(errorHandler(400, "Email already used"));
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new UserModel({
      name,
      password: hash,
      isAdmin,
      isSuperUser,
      email,
    });

    await newUser.save();

    res.status(201).json("Account created successfully");
  } catch (err) {
    return next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    if (!req.body.password || !req.body.email)
      return next(errorHandler(400, "All fields are required"));

    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) return next(errorHandler(400, "User not found"));

    const decodedPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!decodedPassword) return next(errorHandler(400, "Incorrect password"));

    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
        isSuperUser: user.isSuperUser,
      },
      process.env.JWT_SEC
    );

    const { password, ...others } = user._doc;

    res.cookie("token", token, { httpOnly: true }).status(200).json(others);
  } catch (err) {
    return next(err);
  }
};
