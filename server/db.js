import { createPool } from "mysql2/promise";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();

export const db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

export async function runQueries() {

  const categoriesTableQuery = `
    CREATE TABLE IF NOT EXISTS categories (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      admin BOOLEAN NOT NULL
    );
  `;

  const buildsTableQuery = `
    CREATE TABLE IF NOT EXISTS builds (
      id INT AUTO_INCREMENT PRIMARY KEY,
      mainImage VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      client VARCHAR(255) NOT NULL,
      time VARCHAR(255) NOT NULL,
      date DATETIME NOT NULL,
      category INT NOT NULL,
      FOREIGN KEY (category) REFERENCES categories(id)
    );
  `;

  const additionalImagesTableQuery = `
    CREATE TABLE IF NOT EXISTS additional_images (
      id INT AUTO_INCREMENT PRIMARY KEY,
      build_id INT NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      FOREIGN KEY (build_id) REFERENCES builds(id) ON DELETE CASCADE
    );
  `;


  async function insertAdminUser(username, password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const [existingUserRows] = await db.query(`SELECT * FROM users WHERE username = ?`, [username]);
    const existingUser = existingUserRows[0];

    if (!existingUser) {
      await db.query(`INSERT INTO users (username, password, admin) VALUES (?, ?, 1)`, [username, hashedPassword]);
    }
  }

  try {
    await db.query(categoriesTableQuery)
    await db.query(usersTableQuery)
    await db.query(buildsTableQuery)
    await db.query(additionalImagesTableQuery)
    insertAdminUser(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
  } catch (error) {
    console.error(error);
  }
}

