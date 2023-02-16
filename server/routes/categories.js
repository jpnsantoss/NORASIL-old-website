import express from "express";
import { getCategories, getCategory, addCategory, deleteCategory, updateCategory } from "../controllers/category.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", addCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);


export default router;