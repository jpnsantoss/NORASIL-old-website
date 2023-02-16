import { db } from "../db.js";

export const getBuilds = async (req, res) => {
  const q = req.query.category
    ? "SELECT * FROM builds WHERE category=?"
    : "SELECT * FROM builds";

  try {
    const [data] = await db.query(q, [req.query.category]);

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
    if (err) return res.status(500).json(err);

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
  console.log("In construction");
};

export const deleteBuild = (req, res) => {
  console.log("In construction");
};

export const updateBuild = (req, res) => {
  console.log("In construction");
};

export const getBuildAdditionalImages = (req, res) => {
  console.log("In construction");
};

