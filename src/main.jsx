import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import AddProduct from "./pages/AddProduct.jsx";
import Cart from "./pages/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index Component={Home} />
          <Route path="products" Component={Product} />
          <Route
            path="add-product"
            Component={AddProduct}
          />
          <Route
            path="cart"
            Component={Cart}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
