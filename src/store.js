import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./components/posts/reducer.js";

export default configureStore({
  reducer: {
    postsReducer: postsReducer
  }
});
