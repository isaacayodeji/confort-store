import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";
import userReducer from './features/cart/user/userSlice'
// import userReducer from "./features/cart/user/userSlice";



export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
