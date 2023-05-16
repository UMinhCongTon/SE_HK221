import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginUser",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    loginStart(state, action) {
      state.login.isFetching = true;
      state.login.error = false;
    },
    loginSuccess(state, action) {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFail(state, action) {
      state.login.isFetching = false;
      state.login.error = true;
    },
    getCurrentStart(state, action) {
      state.login.isFetching = true;
      state.login.error = false;
    },
    getCurrentSuccess(state, action) {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    getCurrentFail(state, action) {
      state.login.isFetching = false;
      state.login.error = true;
    },
  },
});

export const { loginSuccess, loginFail, loginStart, getCurrentStart, getCurrentSuccess, getCurrentFail} = loginSlice.actions;
export default loginSlice.reducer;
