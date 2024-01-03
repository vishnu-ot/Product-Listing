import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let response = await axios("http://localhost:3000/");

      setProducts(response.data);
    } catch (error) {
      console.log("Error getting products: ", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Container sx={{ marginTop: "100px", display: "flex", gap: 3 }}>
      {products?.map((product) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={product.product_id}>
            <CardMedia
              sx={{ height: 200, objectFit: "cover" }}
              image={product.product_img}
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="center"
              >
                {product.product_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.product_desc}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button size="small">{product.product_price}</Button>
              <Button size="small">Add to Cart</Button>
            </CardActions>
          </Card>
        );
      })}
    </Container>
  );
}

export default Products;
