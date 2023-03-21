import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  try {
    const [data] = await db.query(q, [req.body.username]);

    if (data.length === 0) return res.status(404).json("User not found!");

    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong username or password!" });

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res.header("Access-Control-Allow-Credentials", "true");
    res.cookie('access_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000 // Expires in 7 days
    });
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const logout = (req, res) => {
  res.clearCookie("access_token", {
    sameSite: "lax",
    secure: true
  }).status(200).json("O usuário desconectou-se.")
};


export const changePassword = (req, res) => {
  console.log("In construction");
};

