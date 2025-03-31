const express = require("express");

const app = express();

// Middleware
app.use(express.json());

const itens = ["Backpack", "Flashlight", "Ration", "Axe"];

//localhost:5000 or any port that i want to use
app.listen("5000", () => {
  console.log("Running at http://localhost:5000");
});

app.get("/itens", (req, res) => {
  res.json(itens);
});

app.post("/itens", (req, res) => {
  res.json(itens.push("Cloth"));
});

app.put("/itens", (req, res) => {
  res.json(itens[0] = "Backpack+");
});

app.delete("/itens", (req, res) => {
    res.json(itens.pop());
});