const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  image: String,
});

const postModel = new mongoose.model("Posts", postSchema);

module.exports = postModel;