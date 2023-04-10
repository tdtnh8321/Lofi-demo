import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const rd = Number(Math.floor(Math.random() * 20) + 1);
const initialState = {
  type: 1,
  num: Number(Math.floor(Math.random() * 193) + 1),
};
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    changeTypeMusic: (state, action: PayloadAction<number>) => {
      state.type = action.payload;
    },
    changeNumMusic: (state, action: PayloadAction<number>) => {
      state.num = action.payload;
    },
    changeType: (state, action: PayloadAction<number>) => {
      state.type = action.payload;
      state.num = Number(Math.floor(Math.random() * 20) + 1);
    },
  },
});
const { actions, reducer } = musicSlice;
export const { changeTypeMusic, changeNumMusic, changeType } = actions;
export default reducer;
