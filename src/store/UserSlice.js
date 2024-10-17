import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  products: null,
  isLoggedIn: false,
  error: null,
  page_loading: true,
  loading: true,
  role: null,
  shops: [],
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setpageloading: (state, action) => {
      state.page_loading = true;
    },
    setpageloadingfalse: (state, action) => {
      state.page_loading = false;
    },
    setloading: (state, action) => {
      state.loading = true;
    },
    setloadingfalse: (state, action) => {
      state.loading = false;
    },
    loaduser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
      state.role = action.payload.role;
    },
    setshops: (state, action) => {
      state.shops = action.payload;
    },
    createshops: (state, action) => {
      state.shops.push(action.payload);
    },
    removeshops: (state, action) => {
      state.shops = state.shops.filter((shop) => shop._id !== action.payload);
    },
    errors: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
      state.role = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setloading,
  loaduser,
  errors,
  setloadingfalse,
  logout,
  setshops,
  createshops,
  removeshops,
  setpageloading,
  setpageloadingfalse,
} = userSlice.actions;

export default userSlice.reducer;
