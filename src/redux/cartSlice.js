import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    //actions
    // update state .action = parameter used to define argument of addToCart function
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    //id
    removeCart: (state, action) => {
      // return new filtered array
      return state.filter((i) => i.id != action.payload);
    },
    clearCart: (state) => {
      return [];
    },
  },
});

//export reducer
export default cartSlice.reducer;

//action
export const { addToCart, removeCart, clearCart } = cartSlice.actions;
