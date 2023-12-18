import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const sectionSlice = createSlice({
  name: 'sectionItem',
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer;
