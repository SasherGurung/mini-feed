const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username must be provided"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email must be provided"],
      unique: true,
    },

    phoneNumber: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password must be provided"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
