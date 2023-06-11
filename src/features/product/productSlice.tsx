import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductType, SingleProductType } from "../../types";

const url =
  "https://api.unsplash.com/search/photos?client_id=1ImbsBsOVc9Ns6T4zmkFMuhIvdejywf8b3Mh96Tr6-g&query=artwork";

export type initialStateType = {
  product_loading: boolean;
  product_error: boolean;
  products: any;
  filtered_products: any;
  amount: number;
  totals: number;
  single_product: SingleProductType;
  single_loading: boolean;
  single_error: boolean;
  cart: any[];
  frames: any[];
  frame_loading: boolean;
  frame_error: boolean;
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
export const getFrames = createAsyncThunk("product/getFrames", async () => {
  try {
    const resp = await fetch(
      "https://api.unsplash.com/search/photos?client_id=1ImbsBsOVc9Ns6T4zmkFMuhIvdejywf8b3Mh96Tr6-g&query=frame"
    );
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
  amount: 0,
  totals: 0,
  single_product: {} as SingleProductType,
  single_loading: false,
  single_error: false,
  cart: [],
  frames: [],
  frame_error: false,
  frame_loading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    priceRange(state, action) {
      const price = action.payload;
      const newProducts = state.products.filter(
        (product: ProductType) => product.likes < price
      );
      state.filtered_products = newProducts;
    },
    totalCarts(state) {
      let total = 0;
      for (let i = 0; i < state.cart.length; i++) {
        total = Math.trunc(total + state.cart[i].total);
      }
      state.totals = total;
    },
    addToCart(state, action) {
      const total = state.single_product.likes * action.payload;
      if (state.cart.length > 0) {
        const item = state.cart.find((c) => c.id === state.single_product.id);
        if (item) {
          item.amount = item.amount + action.payload;
          item.total = state.single_product.likes * item.amount;
        } else {
          const cart = {
            image: state.single_product.urls.raw,
            name: state.single_product.alt_description,
            price: state.single_product.likes,
            id: state.single_product.id,
            amount: action.payload,
            total: total,
          };
          const amount = state.cart.length + 1;
          state.amount = amount;
          state.cart = [...state.cart, cart];
        }
      } else {
        const cart = {
          image: state.single_product.urls.raw,
          name: state.single_product.alt_description,
          price: state.single_product.likes,
          id: state.single_product.id,
          amount: action.payload,
          total: total,
        };
        const amount = state.cart.length + 1;
        state.amount = amount;
        state.cart = [...state.cart, cart];
      }
    },
    addFrameToCart(state, action) {
      const { likes, urls, id, alt_description } = action.payload;
      const total = likes * 1;
      if (state.cart.length > 0) {
        const item = state.cart.find((c) => c.id === id);
        if (item) {
          item.amount = item.amount;
          item.total = likes * item.amount;
        } else {
          const cart = {
            image: urls.raw,
            name: alt_description,
            price: likes,
            id: id,
            amount: 1,
            total: total,
          };
          const amount = state.cart.length + 1;
          state.amount = amount;
          state.cart = [...state.cart, cart];
        }
      } else {
        const cart = {
          image: urls.raw,
          name: alt_description,
          price: likes,
          id: id,
          amount: 1,
          total: total,
        };
        const amount = state.cart.length + 1;
        state.amount = amount;
        state.cart = [...state.cart, cart];
      }
    },
    removeCart(state, action) {
      const newCart = state.cart.filter((c) => c.id !== action.payload);
      state.cart = newCart;
      state.amount = state.amount - 1;
    },
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
      .addCase(singlePage.fulfilled, (state, action) => {
        state.single_loading = false;
        state.single_product = action.payload;
        console.log(action.payload);
      })
      .addCase(singlePage.rejected, (state) => {
        state.single_loading = false;
        state.single_error = true;
      })
      .addCase(getFrames.pending, (state) => {
        state.frame_loading = true;
        state.frame_error = false;
      })
      .addCase(getFrames.fulfilled, (state, action) => {
        state.frame_loading = false;
        state.frames = action.payload;
        console.log(action.payload);
      })
      .addCase(getFrames.rejected, (state) => {
        state.frame_loading = false;
        state.frame_error = true;
      });
  },
});

export const { priceRange, addToCart, totalCarts, removeCart, addFrameToCart } =
  productSlice.actions;

export default productSlice.reducer;
