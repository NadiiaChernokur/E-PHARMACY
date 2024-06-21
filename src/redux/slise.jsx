import { createSlice } from '@reduxjs/toolkit';
import { getCategories, getNearestStore, getProducts } from './operation';

const initialState = {
  categories: [],
  productsArray: [],
  nearestStore: [],
  //   categoriesArray: [],
  //   location: [],
  //   noticesResponse: [],
  //   newPet: [],
  //   species: [],
  //   logIn: [],
  //   registr: [],
  //   user: [],
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
// const addPetFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.newPet = action.payload;
// };
// const deletePetFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };
// const getSpeciesFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.species = action.payload;
// };
// const logOutFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
//   state.user = [];
//   state.logIn = [];
//   state.registr = [];
// };
// const logInFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.logIn = action.payload;
// };
// const registrFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.registr = action.payload;
// };
// const getCurrentUserFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.user = action.payload;
// };
// const editUserFulfilled = (state, action) => {
//   state.isLoading = false;
//   state.error = null;
//   state.user = action.payload;
// };

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
      .addCase(getNearestStore.rejected, handleRejected),
  //   .addCase(getNoticesCategories.pending, handlePendingCategory)
  //   .addCase(getNoticesCategories.fulfilled, getNoticesCategoriesFulfilled)
  //   .addCase(getNoticesCategories.rejected, handleRejected)
  //   .addCase(getNoticesResponse.pending, handlePending)
  //   .addCase(getNoticesResponse.fulfilled, getNoticesResponseFulfilled)
  //   .addCase(getNoticesResponse.rejected, handleRejected)
  //   .addCase(toFavoriteAdd.pending, handlePending)
  //   .addCase(toFavoriteAdd.fulfilled, addToFavoriteFulfilled)
  //   .addCase(toFavoriteAdd.rejected, handleRejected)
  //   .addCase(toFavoriteRemove.pending, handlePending)
  //   .addCase(toFavoriteRemove.fulfilled, removeFulfilled)
  //   .addCase(toFavoriteRemove.rejected, handleRejected)
  //   .addCase(addPet.pending, handlePending)
  //   .addCase(addPet.fulfilled, addPetFulfilled)
  //   .addCase(addPet.rejected, handleRejected)
  //   .addCase(deletePet.pending, handlePending)
  //   .addCase(deletePet.fulfilled, deletePetFulfilled)
  //   .addCase(deletePet.rejected, handleRejected)
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
