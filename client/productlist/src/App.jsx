import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/header/Header";
import Products from "./Components/product gallary/Products";
import Singleproduct from "./Components/single product/Singleproduct";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:id" element={<Singleproduct />} />
      </Routes>
    </>
  );
}

export default App;
