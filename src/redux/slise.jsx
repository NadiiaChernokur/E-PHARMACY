import { createSlice } from '@reduxjs/toolkit';
import {
  getCategories,
  getNearestStore,
  getProducts,
  getReviews,
  getStore,
  getUser,
  logIn,
  registration,
  updateCart,
} from './operation';

const initialState = {
  categories: [],
  productsArray: [],
  nearestStore: [],
  reviews: [],
  store: [],
  //   noticesResponse: [],
  //   newPet: [],
  //   species: [],
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
// const handlePendingCategory = state => {
//   state.isLoadingCategory = true;
// };

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
// const getNoticesCategoriesFulfilled = state => {
//   state.isLoadingCategory = false;
//   state.error = null;
// };

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
// const deletePetFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };
const getStoreFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.store = action.payload;
};
// const logOutFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
//   state.user = [];
//   state.logIn = [];
//   state.registr = [];
// };
const loginFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
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
  state.cart = action.payload;
};

// const getNoticesResponseFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.noticesResponse = action.payload;
// };
// const addToFavoriteFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.favoriteArray = action.payload;
// };
// const removeFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.favoriteArray = action.payload;
// };

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
      .addCase(getUser.rejected, handleRejected),
  //   .addCase(getSpecies.pending, handlePending)
  //   .addCase(getSpecies.fulfilled, getSpeciesFulfilled)
  //   .addCase(getSpecies.rejected, handleRejected)
  //   .addCase(logOut.pending, handlePending)
  //   .addCase(logOut.fulfilled, logOutFulfilled)
  //   .addCase(logOut.rejected, handleRejected)
  //   .addCase(logIn.pending, handlePending)
  //   .addCase(logIn.fulfilled, logInFulfilled)
  //   .addCase(logIn.rejected, handleRejected)
  //   .addCase(registration.pending, handlePending)
  //   .addCase(registration.fulfilled, registrFulfilled)
  //   .addCase(registration.rejected, handleRejected)
  //   .addCase(getCurrentUser.pending, handlePending)
  //   .addCase(getCurrentUser.fulfilled, getCurrentUserFulfilled)
  //   .addCase(getCurrentUser.rejected, handleRejected)
  //   .addCase(getEditUser.pending, handlePending)
  //   .addCase(getEditUser.fulfilled, editUserFulfilled)
  //   .addCase(getEditUser.rejected, handleRejected),
});

export const farmaReducer = farmaSlice.reducer;
