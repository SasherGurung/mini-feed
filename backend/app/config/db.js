const mongoose = require("mongoose");
const dns = require("dns")

dns.setServers(["1.1.1.1", "1.0.0.1"]);

async function connectDb() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://sashergrg602_db_user:M0Ve4xLclAQxFVtQ@cms-practice.qhikd7w.mongodb.net/",
    );
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDb;