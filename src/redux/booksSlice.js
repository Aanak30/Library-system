import { createSlice } from "@reduxjs/toolkit";
import initialBooks from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    list: initialBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload); // add at top
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;