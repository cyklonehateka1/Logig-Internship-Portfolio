import jwt from "jsonwebtoken";
import { errorHandler } from "./errorHandler";

export const verifyToken = (req, res, next) => {
  const token = req.cookie.token;

  if (!token) return next(errorHandler(401, "You are not authenticated"));

  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) return next(errorHandler(403, "You are not authorized"));
    req.user = user;
    next();
  });
};
