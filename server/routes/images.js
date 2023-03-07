import express from "express";
import { addImage, deleteImage } from "../controllers/image.js";

const router = express.Router();

router.post("/", addImage);
router.delete("/:id", deleteImage);


export default router;