import { verifyToken } from "../jwtVerification.js";
import { createProject } from "../controllers/projectContrroller.js";
import express from "express";

const router = express.Router();

router.post("/new", verifyToken, createProject);

export default router;
