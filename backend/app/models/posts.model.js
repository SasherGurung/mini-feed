const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    images: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const postsModel = mongoose.model("Posts", postsSchema);

module.exports = postsModel;
