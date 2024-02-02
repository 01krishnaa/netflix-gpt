import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesSlice from "./moviesSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
  },
});

export default appstore;
