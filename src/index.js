const express = require("express");

const app = express();

const itens = ["Backpack", "Flashlight", "Ration", "Axe"];

//localhost:5000 or any port that i want to use
app.listen("5000", () => {
    console.log("Running at http://localhost:5000");
});

app.get("/itens", (req, res) => {
    res.json(itens);
});

// app.post("/receba", (req, res) => {
//     res.send({
//         "message": "hallo"
//     });
// });