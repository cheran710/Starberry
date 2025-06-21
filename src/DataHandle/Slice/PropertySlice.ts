import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PropertyState {
  data: any[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
  selectedProperty:null;
  isLoading: boolean;
  error: string | null;
}

const initialState: PropertyState = {
  data: [],
  pagination: {
    page: 1,
    pageSize: 25,
    pageCount: 0,
    total: 0,
  },
  selectedProperty:null,
  isLoading: false,
  error: null,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setProperties: (state, action: PayloadAction<{ data: any[]; pagination: PropertyState['pagination'] }>) => {
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedProperty: (state, action) => {
      state.selectedProperty = action.payload;
    },
    clearSelectedProperty: (state) => {
      state.selectedProperty = null;
    },
  },
});

export const { setProperties, setIsLoading, setError,setSelectedProperty, clearSelectedProperty } = propertySlice.actions;
export default propertySlice.reducer;
