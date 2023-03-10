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

  const usersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      admin BOOLEAN NOT NULL
    );
  `;

  const categoriesTableQuery = `
  CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    INDEX idx_categories_slug(slug) -- add index on slug column
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
        category VARCHAR(255) NOT NULL,
        FOREIGN KEY (category) REFERENCES categories(slug)
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

  async function createCategories() {
    await db.query(categoriesTableQuery);

    await db.query(`
      INSERT INTO categories (name, slug)
      SELECT 'Educação e Saúde', 'educacao'
      WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'educacao')
    `);
    await db.query(`
      INSERT INTO categories (name, slug)
      SELECT 'Comércio e Serviços', 'comercio'
      WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'comercio')
    `);
    await db.query(`
      INSERT INTO categories (name, slug)
      SELECT 'Industrial', 'industrial'
      WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'industrial')
    `);
    await db.query(`
      INSERT INTO categories (name, slug)
      SELECT 'Escritórios', 'escritorios'
      WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'escritorios')
    `);
    await db.query(`
      INSERT INTO categories (name, slug)
      SELECT 'Habitação', 'habitacao'
      WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'habitacao')
    `);
    await db.query(`
      INSERT INTO categories (name, slug)
      SELECT 'Diversos', 'diversos'
      WHERE NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'diversos')
    `);
  }


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
    await createCategories();
    await db.query(usersTableQuery);
    await db.query(buildsTableQuery);
    await db.query(additionalImagesTableQuery);
    insertAdminUser(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);
  } catch (error) {
    console.error(error);
  }
}

