import {
  Button,
  Card,
  CardActions,
  CardContent,
  Box,
  CardMedia,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Singleproduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get(
        `https://product-listing-backend.vercel.app/${id}`
      );
      setSingleProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log();
  const Styledbox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  });

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Styledbox>
      <Card
        sx={{
          width: {
            xs: 350,
            sm: 450,
            md: 500,
          },
        }}
      >
        <CardMedia
          sx={{
            height: {
              xs: 250,
              sm: 300,
              md: 400,
            },
          }}
          image={singleProduct.product_img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {singleProduct.product_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {singleProduct.product_desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{singleProduct.product_price}</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Styledbox>
  );
}

export default Singleproduct;
