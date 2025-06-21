import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Slice/AuthSlice';
import propertyReducer from '../Slice/PropertySlice'; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
    property: propertyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
