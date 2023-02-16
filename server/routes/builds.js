import express from "express";
import { addBuild, deleteBuild, getBuilds, getBuild, updateBuild, getBuildAdditionalImages } from "../controllers/build.js";

const router = express.Router();

router.get("/", getBuilds);
router.get("/:id", getBuild);
router.post("/", addBuild);
router.delete("/:id", deleteBuild);
router.put("/:id", updateBuild);

router.get("/:id/images", getBuildAdditionalImages);



export default router;