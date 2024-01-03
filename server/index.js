const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./products.json");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(products);
});

app.get("/:id", (req, res) => {
  let productId = req.params.id;
  let isProductIdExist = products.find((item) => item.product_id == productId);
  // console.log(productId);
  // console.log(isProductIdExist);
  // res.json(isProductIdExist);
  if (!productId || isNaN(productId) || isProductIdExist.length == 0)
    return res.status(400).json({
      message: "No Data found",
    });
  res.json(isProductIdExist);
});
app.listen(3000, () => console.log("server running on port 3000"));
