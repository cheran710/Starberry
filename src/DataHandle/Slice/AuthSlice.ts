// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  data: any;
  pathname: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
  data: {},
  pathname: window.location.pathname,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ data: any }>) => {
      state.isAuthenticated = true;
      state.data = action.payload.data;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.data = {};
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setPathname: (state, action: PayloadAction<string>) => {
      state.pathname = action.payload;
    },
  },
});

export const { login, logout, setIsLoading, setPathname } = authSlice.actions;
export default authSlice.reducer;
