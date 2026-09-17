const app = require("./src/app");
const { connectDb } = require("./src/db/pool");

connectDb();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
