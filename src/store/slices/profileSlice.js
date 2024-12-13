import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    name: '',
    email: '',
    phone: '',
  },
  previousData: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.previousData = { ...state.data };
      state.data = action.payload;
    },
    undoChanges: (state) => {
      if (state.previousData) {
        state.data = state.previousData;
      }
    },
  },
});

export const { updateProfile, undoChanges } = profileSlice.actions;
export default profileSlice.reducer;
