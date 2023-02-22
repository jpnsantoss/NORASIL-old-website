import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { db, runQueries } from "./db.js";

import authRoutes from "./routes/auth.js";
import buildRoutes from "./routes/builds.js";
import categoryRoutes from "./routes/categories.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "https://norasil.pt"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

db.getConnection()
  .then(connection => {
    console.log("Connected to the Database!");
    runQueries();
  })
  .catch(error => {
    console.error(error);
  });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/builds", buildRoutes);

app.listen(8800, () => {
  console.log("Server running on port 8800!");
})
