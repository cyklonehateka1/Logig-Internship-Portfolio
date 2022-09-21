import UserModel from "../models/UserModel.js";
import { errorHandler } from "../errorHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Signup
export const newUser = async (req, res, next) => {
  try {
    const { name, linkedin, email, github, portfolio, phone, password } =
      req.body;
    if (!name || !email || !github)
      return next(
        errorHandler(401, "Please name, email and github are required")
      );

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const emailExist = await UserModel.findOne({ email });

    if (emailExist) return next(errorHandler(400, "Email already used"));

    const user = new UserModel({
      name,
      linkedin,
      email,
      github,
      portfolio,
      phone,
      password: hash,
    });

    await user.save();
    res.status(200).json("Account created successfully");
  } catch (err) {
    return next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return next(errorHandler(403, "User not found"));

    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!correctPassword) return next(errorHandler(403, "Incorrect Password"));

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SEC
    );

    const { password, ...otherDetails } = user._doc;

    res
      .cookie("jwt_token", token, { httpOnly: true })
      .status(200)
      .json({ otherDetails });
  } catch (err) {
    return err;
  }
};
