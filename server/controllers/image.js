import { db } from "../db.js";
import jwt from "jsonwebtoken";
import fs from "fs";

export const addImage = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });
    const q = "INSERT INTO additional_images (`build_id`, `image_url`) VALUES (?, ?)";
    try {
      await db.query(q, [req.body.buildId, req.body.imgUrl]);
      return res.json("Image has been added.");
    } catch (err) {
      return res.status(500).json(err)
    }
  });
};

export const deleteImage = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Not authenticated." });;
  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });
    const imageId = req.params.id;
    try {
      const [result] = await db.query("SELECT image_url FROM additional_images WHERE `id` = ?", [imageId]);
      const imageUrl = result[0].image_url;
      const q = "DELETE FROM additional_images WHERE `id` = ?"
      await db.query(q, [imageId]);
      fs.unlinkSync(`./uploads/${imageUrl}`);
      return res.json("Image has been deleted!");
    } catch (err) {
      return res.status(500).json(err)
    }
  })
};

