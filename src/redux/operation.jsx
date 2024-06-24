import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `https://e-pharmacy-back.vercel.app`;
export const safeToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const logIn = createAsyncThunk('logIn', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/api/user/login`, data);
    safeToken(respons.data.token);

    return respons.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});
export const registration = createAsyncThunk(
  'registration',
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const respons = await axios.post(`api/user/register`, data);
      safeToken(respons.data.token);
      return respons.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);
export const getCategories = createAsyncThunk(
  'categories',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.get(`api/products/categories`);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getProducts = createAsyncThunk(
  'products',
  async (data, thunkAPI) => {
    try {
      const { category, keyword, limit = 12, page = 1 } = data;
      console.log(category);
      const respons = await axios.get(
        `api/products?category=${category}&keyword=${keyword}&limit=${limit}&page=${page}`
      );
      console.log(respons.data);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getNearestStore = createAsyncThunk(
  'nearest',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.get(`/api/stores/nearest`);
      console.log(respons.data);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getStore = createAsyncThunk('store', async (data, thunkAPI) => {
  try {
    const respons = await axios.get(`/api/stores`);
    console.log(respons.data);
    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const getReviews = createAsyncThunk(
  'reviews',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.get(`/api/customer-reviews`);
      console.log(respons.data);
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
