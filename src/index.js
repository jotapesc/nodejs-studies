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

app.post("/itens/:id", (req, res) => {
  const { newItem } = req.body;
  res.json(itens.push(newItem));
});

app.put("/itens/:idput", (req, res) => {
    const { idput } = req.params;
    const { modItem } = req.body;
  res.json(itens[idput] = modItem);
});

app.delete("/itens/:iddel", (req, res) => {
    const { iddel } = req.params;
    res.json(itens.splice(iddel, 1));
});