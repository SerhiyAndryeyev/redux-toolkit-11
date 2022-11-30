import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui_slice";
import cartSlice from "./cart_slice";

const store = configureStore({
    reducer:{
        toggle: uiSlice.reducer,
        cartManagement: cartSlice.reducer
    }
});

export default store;
