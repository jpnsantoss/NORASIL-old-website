import express from "express";
import { getUsers, getUser, addUser, deleteUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);


export default router;