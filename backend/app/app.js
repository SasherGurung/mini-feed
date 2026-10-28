const express = require("express");
const postsModel = require("./models/posts.model");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET All Posts
app.get("/posts", async (req, res) => {
  try {
    const post = await postsModel.find();

    return res.status(200).json({
      message: "Posts fetched successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
});

// GET Specific Posts by ID
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postsModel.findById(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid post id",
      });
    }

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "The Posts doesn't exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// CREATE Posts
app.post("/createPosts", async (req, res) => {
  try {
    const { title, description, images } = req.body;

    const post = await postsModel.create({
      title,
      description,
      images,
    });

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Post posted successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// PATCH Posts
app.patch("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, images } = req.body;

    const post = await postsModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        images,
      },
      {
        new: true,
        runValidators: true
      },
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      });
    }

    return res.status(200).json({
      message: "Post updated successfully",
      data: post,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
});
module.exports = app;
