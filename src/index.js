const express = require("express");

const app = express();

//localhost:5000 or any port that i want to use
app.listen("5000", () => {
    console.log("Running at http://localhost:5000");
});

app.get("/", (req, res) => {
    res.json({
        name: "robert",
        age: 12
    });
});

// app.post("/receba", (req, res) => {
//     res.send({
//         "message": "hallo"
//     });
// });