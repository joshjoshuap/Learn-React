import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

// Create the store with the reducer and the initial state of the store (the state of the reducer) as the second argument to the configureStore function. 
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer, // get the reducer method from the uiSlice
    cart: cartSlice.reducer, // get the reducer method from the cartSlice
  },
});

export default store;
