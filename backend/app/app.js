const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GET All Posts
app.use("/posts", async(req,res) => {
    try {
        
    } catch (error) {
        return res.status(404).json({
            
        })
    }
})

module.exports = app;