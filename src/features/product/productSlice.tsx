import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType } from "../../types";

const url =
  "https://api.unsplash.com/search/photos?client_id=1ImbsBsOVc9Ns6T4zmkFMuhIvdejywf8b3Mh96Tr6-g&query=artwork";

export type initialStateType = {
  product_loading: boolean;
  product_error: boolean;
  products: any;
  filtered_products: any;
  amount: number;
  total: number;
  single_product: any;
  single_loading: boolean;
  single_error: boolean;
  cart: any;
  frames: any;
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
});
export const searchProducts = createAsyncThunk(
  "product/searchProducts",
  async (artwork: string) => {
    try {
      const resp = await fetch(
        `https://api.unsplash.com/search/photos?client_id=1ImbsBsOVc9Ns6T4zmkFMuhIvdejywf8b3Mh96Tr6-g&query=${artwork}`
      );
      const data = await resp.json();
      return data.results;
    } catch (err) {
      console.log(err);
    }
  }
);
export const singlePage = createAsyncThunk(
  "product/singlePage",
  async (id: string) => {
    try {
      const resp = await fetch(
        `https://api.unsplash.com/photos/${id}?client_id=1ImbsBsOVc9Ns6T4zmkFMuhIvdejywf8b3Mh96Tr6-g`
      );
      const data = await resp.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState: initialStateType = {
  product_loading: false,
  product_error: false,
  products: [],
  filtered_products: [],
  amount: 5,
  total: 0,
  single_product: {},
  single_loading: false,
  single_error: false,
  cart: {
    product: {
      image: "",
      name: "",
      price: "",
      amount: 0,
    },
  },
  frames: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearNumber(state) {
      state.amount = 0;
    },
    priceRange(state, action) {
      const price = action.payload;
      const newProducts = state.products.filter(
        (product: ProductType) => product.likes < price
      );
      state.filtered_products = newProducts;
    },
    // singlePage(state, action) {
    //   const productId = action.payload;
    //   const singleProduct = state.products.find(
    //     (product: ProductType) => product.id === productId
    //   );
    //   console.log(productId);
    //   state.single_product = singleProduct;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.product_loading = true;
        state.product_error = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.product_loading = false;
        state.products = action.payload;
        state.filtered_products = action.payload;
        console.log(action.payload);
      })
      .addCase(getProducts.rejected, (state) => {
        state.product_loading = false;
        state.product_error = true;
      })
      .addCase(searchProducts.pending, (state) => {
        state.product_loading = true;
        state.product_error = false;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.product_loading = false;
        state.products = action.payload;
        state.filtered_products = action.payload;
        console.log(action.payload);
      })
      .addCase(searchProducts.rejected, (state) => {
        state.product_loading = false;
        state.product_error = true;
      })
      .addCase(singlePage.pending, (state) => {
        state.single_loading = true;
        state.single_error = false;
      })
      .addCase(singlePage.fulfilled, (state, action: PayloadAction<string>) => {
        state.single_loading = false;
        state.single_product = action.payload;
        console.log(action.payload);
      })
      .addCase(singlePage.rejected, (state) => {
        state.single_loading = false;
        state.single_error = true;
      });
  },
});

export const { clearNumber, priceRange } = productSlice.actions;

export default productSlice.reducer;
