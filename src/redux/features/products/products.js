import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Iphone 14 Pro Max",
    description: "Latest Apple iPhone with advanced features",
    price: 1099,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1680687688158-e9165395ff00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
  },
];
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Define reducers if needed
    addProduct: (state, action) => {
      state.push({
        id: new Date().getTime(),
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        rating: action.payload.rating,
        image: action.payload.image,
      });
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});
export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
