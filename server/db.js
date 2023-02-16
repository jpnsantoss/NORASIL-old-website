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

  const rolesTableQuery = `
    CREATE TABLE IF NOT EXISTS roles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );
  `;

  const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      role INT NOT NULL,
      FOREIGN KEY (role) REFERENCES roles(id)
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
      date DATE NOT NULL,
      category INT NOT NULL,
      FOREIGN KEY (category) REFERENCES categories(id)
    );
  `;

  const additionalImagesTableQuery = `
    CREATE TABLE IF NOT EXISTS additional_images (
      id INT AUTO_INCREMENT PRIMARY KEY,
      buildId INT NOT NULL,
      imageUrl VARCHAR(255) NOT NULL,
      FOREIGN KEY (buildId) REFERENCES builds(id)
    );
  `;

  const insertRoleQuery = `
    INSERT INTO roles (name)
    SELECT * FROM (SELECT 'admin') AS tmp
    WHERE NOT EXISTS (
      SELECT name FROM roles WHERE name = 'admin'
    ) LIMIT 1;
  `;

  async function insertAdminUser(username, password) {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
  
    // Check if the user already exists
    const [existingUserRows] = await db.query(`SELECT * FROM users WHERE username = ?`, [username]);
    const existingUser = existingUserRows[0];
  
    if (!existingUser) {
      // Insert the new admin user if they don't already exist
      await db.query(`INSERT INTO users (username, password, role) VALUES (?, ?, 1)`, [username, hashedPassword]);
    }
  }

  try {
    await db.query(categoriesTableQuery)
    await db.query(rolesTableQuery)
    await db.query(usersTableQuery)
    await db.query(buildsTableQuery)
    await db.query(additionalImagesTableQuery)
    await db.query(insertRoleQuery)
    insertAdminUser(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
  } catch (error) {
    console.error(error);
  }
}

