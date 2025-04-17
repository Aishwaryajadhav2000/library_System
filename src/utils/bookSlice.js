// utils/bookSlice.js (renamed from cartSlice)
import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
    name: "book",
    initialState: {
        items: [], // your books will go here
    },
    reducers: {
        additem:(state, action) =>{
            state.items.push(action.payload);
        },
        insertItem: (state, action) => {
            state.items.push(action.payload); // Add new book here
        },
        removeItem: (state, action) => {
            state.items.pop(); // consider improving this to remove specific book
        },
        clearBooks: (state) => {
            state.items = [];
        },
    },
});

export const { insertItem, removeItem, clearBooks , additem} = bookSlice.actions;

export default bookSlice.reducer;
