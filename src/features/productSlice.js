import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [{ id: 1, text: "hi" }],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      const product = {
        id: nanoid(),
        text: action.payload,
      };
      state.products.push(product);
    },
    removeproduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addproduct, removeproduct } = productSlice.actions;
export default productSlice.reducer;
