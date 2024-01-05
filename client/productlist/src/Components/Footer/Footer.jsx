import { Box, Typography, styled } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const Footerbox = styled(Box)({
    width: "100%",
    color: "white",
    backgroundColor: "#007bff",
    height: "100px",
    display: "flex",
    justifyContent: "space-around",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // zIndex: 10,
  });

  const FooterIconBox = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
  });

  const FooterItemsBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  }));

  return (
    <Footerbox>
      <FooterItemsBox>
        <Typography variant="h6">E mail: support@flipKarte.com</Typography>
        <Typography variant="h6">Phone number: +38097254632</Typography>
        <Typography variant="h6"> Head office: India</Typography>
      </FooterItemsBox>
      <FooterItemsBox>
        <Typography variant="h6">Payment</Typography>
        <Typography variant="h6">Shipping</Typography>
        <Typography variant="h6">FAQ</Typography>
      </FooterItemsBox>
      <FooterIconBox>
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </FooterIconBox>
    </Footerbox>
  );
}

export default Footer;
