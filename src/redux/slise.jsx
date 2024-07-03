import { createSlice } from '@reduxjs/toolkit';
import {
  clearCart,
  getCategories,
  getNearestStore,
  getProducts,
  getReviews,
  getStore,
  getUser,
  logIn,
  logOut,
  registration,
  removeCartToId,
  toOrder,
  updateCart,
} from './operation';

const initialState = {
  categories: [],
  productsArray: [],
  nearestStore: [],
  reviews: [],
  store: [],
  user: [],
  registr: [],
  cart: [],
  favoriteArray: [],
  isLoading: false,
  isLoadingCategory: false,
  isLoadingLocation: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const logoutFulfilled = state => {
  state.isLoadingCategory = false;
  state.error = null;
  state.cart = 0;
  state.user = [];
};

const getCategoriesFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.categories = action.payload.results;
};

const getProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.productsArray = action.payload;
};
const getNearestStoreFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.nearestStore = action.payload;
};
const getReviewsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.reviews = action.payload;
};
const orderFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const clearCartFulfilled = state => {
  state.isLoading = false;
  state.error = null;
  state.cart = [];
};
const getStoreFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.store = action.payload;
};

const loginFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
  state.cart = action.payload.user.cart.length;
};
const registrationFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.registr = action.payload;
};
const userFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
};
const updateCartFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cart = action.payload.length;
};

const removeCartFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cart = action.payload.length;
};

const farmaSlice = createSlice({
  name: 'farma',
  initialState: initialState,
  extraReducers: builder =>
    builder
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.fulfilled, getCategoriesFulfilled)
      .addCase(getCategories.rejected, handleRejected)
      .addCase(getProducts.pending, handlePending)
      .addCase(getProducts.fulfilled, getProductsFulfilled)
      .addCase(getProducts.rejected, handleRejected)
      .addCase(getNearestStore.pending, handlePending)
      .addCase(getNearestStore.fulfilled, getNearestStoreFulfilled)
      .addCase(getNearestStore.rejected, handleRejected)
      .addCase(getReviews.pending, handlePending)
      .addCase(getReviews.fulfilled, getReviewsFulfilled)
      .addCase(getReviews.rejected, handleRejected)
      .addCase(getStore.pending, handlePending)
      .addCase(getStore.fulfilled, getStoreFulfilled)
      .addCase(getStore.rejected, handleRejected)
      .addCase(registration.pending, handlePending)
      .addCase(registration.fulfilled, registrationFulfilled)
      .addCase(registration.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, loginFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(updateCart.pending, handlePending)
      .addCase(updateCart.fulfilled, updateCartFulfilled)
      .addCase(updateCart.rejected, handleRejected)
      .addCase(getUser.pending, handlePending)
      .addCase(getUser.fulfilled, userFulfilled)
      .addCase(getUser.rejected, handleRejected)
      .addCase(removeCartToId.pending, handlePending)
      .addCase(removeCartToId.fulfilled, removeCartFulfilled)
      .addCase(removeCartToId.rejected, handleRejected)
      .addCase(toOrder.pending, handlePending)
      .addCase(toOrder.fulfilled, orderFulfilled)
      .addCase(toOrder.rejected, handleRejected)
      .addCase(clearCart.pending, handlePending)
      .addCase(clearCart.fulfilled, clearCartFulfilled)
      .addCase(clearCart.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, logoutFulfilled)
      .addCase(logOut.rejected, handleRejected),
});

export const farmaReducer = farmaSlice.reducer;
