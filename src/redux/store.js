import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";

export default configureStore({
  reducer: {
    // Add Product reducers here
    products: productsReducer,
    cart: cartReducer,
  },
});
