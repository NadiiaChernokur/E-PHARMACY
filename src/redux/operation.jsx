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

export const logOut = createAsyncThunk('logOut', async (data, thunkAPI) => {
  try {
    const respons = await axios.get(`/api/user/logout`);
    clearToken();
    return respons.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

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
      const respons = await axios.get(
        `api/products?category=${category}&keyword=${keyword}&limit=${limit}&page=${page}`
      );

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
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getStore = createAsyncThunk('store', async (data, thunkAPI) => {
  try {
    const respons = await axios.get(`/api/stores`);
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

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateCart = createAsyncThunk(
  'updateToCart',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.put(`/api/cart/update`, data);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const removeCartToId = createAsyncThunk(
  'removeCart',
  async (id, thunkAPI) => {
    try {
      const respons = await axios.delete(`/api/cart/delete/${id}`);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductToId = createAsyncThunk(
  'getProductToId',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.post(`/api/products/getByIds`, { ids: data });

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk('getUser', async (data, thunkAPI) => {
  try {
    const respons = await axios.get(`/api/user/user-info`);

    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const toOrder = createAsyncThunk('toOrder', async (data, thunkAPI) => {
  try {
    const respons = await axios.post(`/api/cart/checkout`, data);

    return respons.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const clearCart = createAsyncThunk(
  'clearCart',
  async (data, thunkAPI) => {
    try {
      const respons = await axios.post(`/api/cart/clear-cart`);

      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
