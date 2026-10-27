const app = require("./app/app")
const connectDb = require("./app/config/db")

connectDb();

app.listen(3000, () => {
    console.log("Server running on port 3000")
})