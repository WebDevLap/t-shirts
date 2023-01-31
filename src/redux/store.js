import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./slices/homeSlice";
import fullItemSlice from "./slices/fullItemSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    fullItem: fullItemSlice,
  }
})