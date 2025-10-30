import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index Component={Home} />
          <Route path="products" Component={Product} />
          <Route
            path="cart"
            element={<h1 className="text-center mt-20">Your Cart</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
