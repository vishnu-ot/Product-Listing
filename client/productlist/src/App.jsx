import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/header/Header";
import Products from "./Components/product gallary/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export default App;
