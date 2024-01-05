import {
  Box,
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
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let response = await axios("https://product-listing-backend.vercel.app/");

      setProducts(response.data);
    } catch (error) {
      console.log("Error getting products: ", error);
    }
  };

  const goToProduct = async (id) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box
      sx={{
        marginTop: "100px",
        display: "flex",
        flexWrap: "wrap",

        width: "80%",
        gap: 3,
      }}
    >
      {products?.map((product) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={product.product_id}>
            <CardMedia
              sx={{ height: 200, objectFit: "cover", cursor: "pointer" }}
              image={product.product_img}
              title="green iguana"
              onClick={() => goToProduct(product.product_id)}
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
    </Box>
  );
}

export default Products;
