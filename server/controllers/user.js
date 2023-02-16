import { db } from "../db.js";

export const getUsers = async (req, res) => {
  const q = req.query.role
  ? "SELECT * FROM users WHERE role=?"
  : "SELECT * FROM users";

  try { 
    const [data] = await db.query(q, [req.query.role]);
    return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getUser = (req, res) => {
  console.log("In construction");
};

export const addUser = (req, res) => {
  console.log("In construction");
};

export const deleteUser = (req, res) => {
  console.log("In construction");
};

export const updateUser = (req, res) => {
  console.log("In construction");
};

