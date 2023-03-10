import { db } from "../db.js";
import jwt from "jsonwebtoken";
import { cleanUnusedImages } from "../deleteImages.js";

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
  SELECT * FROM categories WHERE slug = ?
  `;

  try {
    const [data] = await db.query(q, [req.params.id]);
    if (data.length === 0) return res.status(404).json({ message: "Categoria não encontrada" });

    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err)
  }
};