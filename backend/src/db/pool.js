require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: "sas123!@#",
  database: process.env.DB_DATABASE,
});

async function connectDb() {
  try {
    const client = await pool.connect();
    console.log("Connected to PostgreSQL");
    client.release();
  } catch (error) {
    console.log("Connection Error: ", error);
  }
}

module.exports = { connectDb, pool };
