import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isModalOpen: false,
  currentProduct: null,
};

const adminPanelSlice = createSlice({
  name: 'adminPanel',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    toggleModal: (state, action) => {
      state.isModalOpen = action.payload.isOpen;
      state.currentProduct = action.payload.product || null;
    },
  },
});

export const { addProduct, removeProduct, toggleModal } = adminPanelSlice.actions;
export default adminPanelSlice.reducer;
