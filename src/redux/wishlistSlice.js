import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishList",
  initialState: { wishlist: [] },
  reducers: {
    addToWish: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeWish: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default wishlistSlice.reducer;

export const { addToWish, removeWish } = wishlistSlice.actions;
