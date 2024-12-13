import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  editingBook: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
    removeBook: (state, action) => {
      state.list = state.list.filter((book) => book.title !== action.payload);
    },
    setEditingBook: (state, action) => {
      state.editingBook = action.payload;
    },
  },
});

export const { addBook, removeBook, setEditingBook } = bookSlice.actions;
export default bookSlice.reducer;
