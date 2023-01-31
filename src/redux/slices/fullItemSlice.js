import { createSlice } from "@reduxjs/toolkit";

const fullItemSlice = createSlice({
  name: 'fullItem',
  initialState: {
    activeImg: 0,
    sizes: [
      { id: 1, label: 'XS', number: 44 },
      { id: 2, label: 'S', number: 46 },
      { id: 3, label: 'M', number: 48 },
      { id: 4, label: 'L', number: 50 },
      { id: 5, label: 'XL', number: 52 },
    ],
    activeSize: 0,
  },
  reducers: {
    setActiveImg: (state, action) => {
      state.activeImg = action.payload;
    },
    setActiveSize: (state, action) => {
      state.activeSize = action.payload;
    }
  }
})

export const {setActiveImg, setActiveSize} = fullItemSlice.actions;
export default fullItemSlice.reducer;