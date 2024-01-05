import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/header/Header";
import Products from "./Components/product gallary/Products";
import Singleproduct from "./Components/single product/Singleproduct";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Singleproduct />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
