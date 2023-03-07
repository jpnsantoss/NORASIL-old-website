import express from "express";
import { addBuild, deleteBuild, getBuilds, getBuild } from "../controllers/build.js";

const router = express.Router();

router.get("/", getBuilds);
router.get("/:id", getBuild);
router.post("/", addBuild);
router.delete("/:id", deleteBuild);



export default router;