const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/posts.model");

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/posts", upload.single("post-image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);

  const post = await postModel.create({
    image: result.url,
    title: req.body.title,
  });

  return res.json(201).json({
    message: "Post created Successfully",
    post,
  });
});

module.exports = app;