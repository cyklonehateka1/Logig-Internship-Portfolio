import { newUser, signin } from "../controllers/authController.js";
import { verifyToken } from "../jwtVerification.js";
import express from "express";

const router = express.Router();

router.post("/signup", newUser);
router.post("/signin", signin);

export default router;
