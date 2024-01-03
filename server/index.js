const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./products.json");

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.listen(3000, () => console.log("server running on port 3000"));
