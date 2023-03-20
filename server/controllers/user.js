import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  const q = "SELECT * FROM users";

  try {
    const [data] = await db.query(q);
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const addUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Not authenticated!" });

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });
    try {
      const [data] = await db.query("SELECT * FROM users WHERE username = ?", [req.body.username]);
      if (data.length) return res.status(409).json(data)
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const q = "INSERT INTO users(`username`, `password`, `admin`) VALUES (?)";
      const values = [req.body.username, hash, req.body.admin];

      try {
        await db.query(q, [values]);
        return res.status(200).json("User has been created.");
      } catch (err) {
        console.log(err)
        return res.status(500).json(err);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });
};


export const deleteUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Not authenticated." });;
  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });
    const q = "DELETE FROM users WHERE `id` = ?"

    try {
      await db.query(q, [req.params.id]);

      return res.json("User has been deleted!");
    } catch (err) {
      return res.status(500).json(err)
    }
  })
};

export const updateUser = (req, res) => {
  console.log("In construction");
};

