import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearChat: (state) => {
      state.items.length = 0; //meaning []
    },
  },
});

export const { addItem, removeItem, clearChat } = cartSlice.actions;

export default cartSlice.reducer;
