import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <h1 className="text-center mt-20">Welcome to ShopingCart</h1>
          }
        />
        <Route path="products" element={<h1 className="text-center mt-20">Our Products</h1>} />
        <Route path="cart" element={<h1 className="text-center mt-20">Your Cart</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
