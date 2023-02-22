import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getCategories = async (req, res) => {
  const q = "SELECT * FROM categories";

  try {
    const [data] = await db.query(q)
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getCategory = async (req, res) => {
  const q = `
  SELECT * FROM categories WHERE id = ?
  `;

  try {
    const [data] = await db.query(q, [req.params.id]);
    if (data.length === 0) return res.status(404).json({ error: "Categoria não encontrada" });

    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err)
  }
};

export const addCategory = async (req, res) => {

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "INSERT INTO categories(`name`) VALUES (?)";
    try {
      db.query(q, [req.body.name]);
      return res.json("Category has been created.");
    } catch (err) {
      return res.status(500).json(err)
    }
  });
};

export const deleteCategory = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated.");
  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const categoryId = req.params.id;
    const q = "DELETE FROM categories WHERE `id` = ?"

    try {
      db.query(q, [categoryId]);

      return res.json("Category has been deleted!");
    } catch (err) {
      return res.status(500).json(err)
    }
  })
};

