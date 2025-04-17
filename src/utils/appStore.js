// utils/appStore.js
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";
import cartReducer from "./CartSlice"

const appStore = configureStore({
    reducer: {
        book: bookReducer,
        cart : cartReducer
    },
});

export default appStore;
