import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api call -createAsyncThink

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    return result.data;
  }
);

// slice creation
const productSlice = createSlice({
  name: "productList",
  initialState: {
    loading: false,
    products: [],
    searchArray: [],
    error: "",
  },
  reducers: {
    //actions without api
    searchProduct: (state, action) => {
      state.products = state.searchArray.filter((i) =>
        i.title
          .toLowerCase()
          .trim()
          .includes(action.payload.toLowerCase().trim())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.searchArray = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;

export const { searchProduct } = productSlice.actions;
