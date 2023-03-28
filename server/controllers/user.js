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

export const getUser = async (req, res) => {
  const q = "SELECT * FROM users WHERE id = ?";

  try {
    const [data] = await db.query(q, [req.params.id]);
    if (data.length === 0) return res.status(404).json({ message: "User não encontrado" });
    return res.status(200).json(data[0])
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const addUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Não autenticado!" });

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token inválido!" });
    try {
      const [data] = await db.query("SELECT * FROM users WHERE username = ?", [req.body.username]);
      if (data.length) return res.status(409).json(data)
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const q = "INSERT INTO users(`username`, `password`, `admin`) VALUES (?)";
      const values = [req.body.username, hash, req.body.admin];

      try {
        await db.query(q, [values]);
        return res.status(200).json("User criado!");
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
  if (!token) return res.status(401).json({ message: "Não autenticado!" });;
  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token inválido!" });
    const q = "DELETE FROM users WHERE `id` = ?"

    try {
      await db.query(q, [req.params.id]);

      return res.json("User eliminado!");
    } catch (err) {
      return res.status(500).json(err)
    }
  })
};

export const updateUser = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Não autenticado!" });;
  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token inválido!" });
    try {
      const [data] = await db.query("SELECT * FROM users WHERE username = ? AND id <> ?", [req.body.username, req.params.id]);
      if (data.length) return res.status(409).json(data)
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const isAdmin = req.body.isAdmin ? req.body.admin : 0;
      const values = [req.body.username, hash, isAdmin, req.params.id]
      try {
        const q = "UPDATE users SET `username`=?, `password`=?, `admin`=? WHERE `id`=?";
        await db.query(q, values);
        return res.status(200).json("User editado!");
      } catch (err) {
        return res.status(500).json(err)
      }
    } catch (err) {
      return res.status(500).json(err)
    }


  })
};
