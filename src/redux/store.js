import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";

// Save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    console.error("Could not save cart to localStorage", err);
  }
};

// Save products to localStorage
const saveProductsToLocalStorage = (products) => {
  try {
    const serializedProducts = JSON.stringify(products);
    localStorage.setItem("products", serializedProducts);
  } catch (err) {
    console.error("Could not save products to localStorage", err);
  }
};

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  const state = store.getState();
  saveCartToLocalStorage(state.cart);
  saveProductsToLocalStorage(state.products);
});

export default store;
