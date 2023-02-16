import express from "express";
import { changePassword, login, logout } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/changepw", changePassword);

export default router;