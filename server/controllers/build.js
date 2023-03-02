import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getBuilds = async (req, res) => {
  const limit = 20;
  const offset = req.query.page ? (req.query.page - 1) * limit : 0;
  const searchTerm = req.query.search ? `%${req.query.search}%` : "%";
  const category = req.query.category ? req.query.category : "%";

  try {
    const [data] = await db.query(
      `
      SELECT b.*, c.name AS category_name
      FROM builds b
      JOIN categories c ON b.category = c.name
      WHERE (c.name LIKE ? )
      AND (b.title LIKE ? OR b.client LIKE ? OR b.description LIKE ?)
      ORDER BY b.date DESC
      LIMIT ? OFFSET ?
      `,
      [category, searchTerm, limit, offset]
    );

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).send(err);
  }
};



export const getBuild = async (req, res) => {
  const q = `
    SELECT b.id, b.title, b.desc, b.img, b.user_id, u.username, u.img AS userImg, b.category_id, c.name AS category, b.created_at
    FROM builds b
    JOIN users u ON b.user_id = u.id
    JOIN categories c ON b.category_id = c.id
    WHERE b.id = ?
  `;

  try {
    const [data] = await db.query(q, [req.params.id]);

    if (data.length === 0) return res.status(404).json({ error: "Build not found" });
  } catch (err) {
    return res.status(500).json(err);
  }

  const build = data[0];

  const q2 = `
      SELECT image_url
      FROM build_images
      WHERE build_id = ?
    `;

  try {
    const [data2] = await db.query(q2, [req.params.id])

    build.additional_images = data2.map(row => row.image_url);

    return res.status(200).json(build);
  } catch (err2) {
    return res.status(500).json(err2);
  }
};


export const addBuild = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

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

export const deleteBuild = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated.");
  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const buildId = req.params.id;
    const q = "DELETE FROM builds WHERE `id` = ?"

    try {
      await db.query(q, [buildId]);

      return res.json("Build has been deleted!");
    } catch (err) {
      return res.status(500).json(err)
    }
  })
};

export const getBuildAdditionalImages = (req, res) => {
  console.log("In construction");
};

