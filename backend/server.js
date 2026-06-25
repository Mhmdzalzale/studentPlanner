const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Backend is working");
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});