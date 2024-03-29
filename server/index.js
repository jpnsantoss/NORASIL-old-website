import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { db, runQueries } from "./db.js";
import sharp from "sharp";
import path from "path";

import authRoutes from "./routes/auth.js";
import buildRoutes from "./routes/builds.js";
import userRoutes from "./routes/users.js";
import imageRoutes from "./routes/images.js";

import multer from "multer";

const app = express();

app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:3000", "https://norasil.pt", "http://localhost:5173", "http://localhost:4173", "https://norasil.vercel.app"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());


db.getConnection()
  .then(connection => {
    console.log("Connected to the Database!");
    runQueries();
  })
  .catch(error => {
    console.error(error);
  });


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
  const filePath = req.file.path;

  sharp(filePath)
    .resize({ width: 780 })
    .webp()
    .toFile(`${path.parse(filePath).dir}/${path.parse(filePath).name}.webp`, (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.status(200).json(`${path.parse(req.file.filename).name}.webp`);
    });
})




app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/builds", buildRoutes);
app.use("/api/images", imageRoutes);

app.use('/uploads', express.static('uploads'));


app.listen(8800, () => {
  console.log("Server running on port 8800!");
})
