import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";

function Header() {
  const StyledToolbar = styled(Box)(({ theme }) => ({
    justifyContent: "space-between",
    display: "flex",
    height: "60px",
  }));
  const Logobox = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    width: "200px",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
  }));
  const Searchbox = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    width: "40%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
  }));
  const Icongroup = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
  }));
  return (
    <Box sx={{ position: "sticky" }}>
      <AppBar>
        <StyledToolbar>
          <Logobox>
            <Typography variant="h6" color="red" textAlign="center">
              hellosssss
            </Typography>
          </Logobox>
          <Searchbox>
            <InputBase placeholder="search....." />
          </Searchbox>
          <Icongroup>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Avatar>H</Avatar>
          </Icongroup>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
