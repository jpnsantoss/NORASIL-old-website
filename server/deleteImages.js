import fs from "fs";
import { db } from "./db.js";

export async function cleanUnusedImages() {
  try {
    const [additionalImages] = await db.query("SELECT image_url FROM additional_images");
    const [buildImages] = await db.query("SELECT mainImage FROM builds");

    const allImages = [
      ...additionalImages.map((img) => img.image_url),
      ...buildImages.map((img) => img.mainImage)
    ];

    fs.readdir("./uploads", (err, files) => {
      if (err) {
        throw new Error(err);
      }

      for (const file of files) {
        if (!allImages.includes(file)) {
          fs.unlinkSync(`./uploads/${file}`);
        }
      }
    });
  } catch (err) {
    console.log(err);
  }
}
