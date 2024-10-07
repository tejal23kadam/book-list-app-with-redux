// Filename - reducers/index.js

//import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import BooksReducer from "./reducerBook";
import ActiveBook from "./reducerActiveBook";

const rootReducer = configureStore({
    reducer: {
        books: BooksReducer,
        activeBook: ActiveBook
    }
});

export default rootReducer;
