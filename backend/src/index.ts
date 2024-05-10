import multer from "multer";
import express from "express";
import cors from "cors";

const uploads = multer({ dest: "uploads/" });
const app = express();

app.use(cors());

app.post("/upload", uploads.single("file"), (req, res) => {
  console.log((req as any).file);
  res.send("File uploaded");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
