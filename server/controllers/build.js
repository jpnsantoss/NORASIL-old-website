import { db } from "../db.js";
import jwt from "jsonwebtoken";
import fs from "fs";
import { cleanUnusedImages } from "../deleteImages.js";

export const getBuilds = async (req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;
  const searchTerm = req.query.search ? `%${req.query.search}%` : "%";
  const category = req.query.category ? `%${req.query.category}%` : "%";

  try {
    const [data] = await db.query(
      `
      SELECT b.*, c.name AS category_name, DATE_FORMAT(DATE(b.date), '%d/%m/%y') AS formatted_date
      FROM builds b
      JOIN categories c ON b.category = c.slug
      WHERE (c.slug LIKE ?)
      AND (b.title LIKE ? OR b.client LIKE ? OR b.description LIKE ?)
      ORDER BY b.date DESC
      LIMIT ? OFFSET ?
      `,
      [category, searchTerm, searchTerm, searchTerm, limit, (page - 1) * limit]
    );

    const [total] = await db.query(
      `
      SELECT COUNT(*) FROM builds
      WHERE category = ?
      AND (title LIKE ? OR client LIKE ? OR description LIKE ?)
      `,
      [category, searchTerm, searchTerm, searchTerm]
    );

    const total_pages = Math.ceil(total[0].total / limit);

    return res.status(200).json({ data, page, total: total[0].total, per_page: limit, total_pages });
  } catch (err) {
    return res.status(500).json(err);
  }
};




export const getBuild = async (req, res) => {
  const q = `
    SELECT b.*, c.name AS category_name, DATE_FORMAT(DATE(b.date), '%d/%m/%y') AS formatted_date
    FROM builds b
    JOIN categories c ON b.category = c.slug
    WHERE b.id = ?
  `;

  try {
    const [data] = await db.query(q, [req.params.id]);

    if (data.length === 0) return res.status(404).json({ message: "Build not found." });

    const q2 = `
      SELECT id, image_url
      FROM additional_images
      WHERE build_id = ?
    `;

    try {
      const build = data[0];

      const [data2] = await db.query(q2, [req.params.id])
      build.additional_images = data2.map(row => {
        return { id: row.id, image_url: row.image_url };
      });

      return res.status(200).json(build);
    } catch (err2) {
      return res.status(500).json(err2);
    }
  } catch (err) {
    return res.status(500).json(err);
  }

};


export const addBuild = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Not authenticated!" });

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });

    const q = "INSERT INTO builds(`title`, `description`, `client`, `time`, `date`, `category`, `mainImage`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.client,
      req.body.time,
      req.body.date,
      req.body.category,
      req.body.mainImage
    ]
    try {
      await db.query(q, [values]);
      return res.json("Build has been created.");
    } catch (err) {
      return res.status(500).json(err)
    }
  });
};

export const deleteBuild = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json({ message: "Not authenticated." });
  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json({ message: "Token is not valid!" });
    const buildId = req.params.id;
    const q = "SELECT mainImage FROM builds WHERE `id` = ?"

    try {
      const [result] = await db.query(q, [buildId]);
      const mainImage = result[0].mainImage;
      await db.query("DELETE FROM builds WHERE `id` = ?", [buildId]);
      fs.unlinkSync(`./uploads/${mainImage}`);
      cleanUnusedImages();
      return res.json("Build has been deleted!");
    } catch (err) {
      console.log(err);
      return res.status(500).json(err)
    }
  })
};