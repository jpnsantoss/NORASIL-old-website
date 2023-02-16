import { db } from "../db.js";

export const getRoles = async (req, res) => {
  const q = "SELECT * FROM roles";

  try {
    const [data] = await db.query(q)
      return res.status(200).json(data)
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const getRole = (req, res) => {
  console.log("In construction");
};

export const addRole = (req, res) => {
  console.log("In construction");
};

export const deleteRole = (req, res) => {
  console.log("In construction");
};

export const updateRole = (req, res) => {
  console.log("In construction");
};

