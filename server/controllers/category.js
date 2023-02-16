import { db } from "../db.js";

export const getCategories = async (req, res) => {
  const q = "SELECT * FROM categories";

  try {
    const [data] = await db.query(q)
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getCategory = (req, res) => {
  console.log("In construction");
};

export const addCategory = (req, res) => {
  console.log("In construction");
};

export const deleteCategory = (req, res) => {
  console.log("In construction");
};

export const updateCategory = (req, res) => {
  console.log("In construction");
};

