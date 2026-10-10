import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      if (!state.items.some(item => item.id === product.id)) {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = Math.max(1, Math.floor(Number(quantity) || 1));
    }
  }
});
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
