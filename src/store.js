import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer from './features/cart/user/userslice'


export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
