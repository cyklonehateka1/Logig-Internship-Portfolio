import express from "express";
import {
  createIntern,
  getAllInterns,
  getIntern,
  updateIntern,
} from "../controllers/internControllers.js";
import { verifyToken } from "../jwtVerification.js";

const router = express.Router();

router.post("/new", verifyToken, createIntern);
router.get("/all", getAllInterns);
router.put("/update/:id", updateIntern);
router.get("/:id", getIntern);

export default router;
