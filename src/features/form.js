import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onChange: (state, { payload }) => {
      state.value = {
        ...state.value,
        ...payload,
      };
    },

    handleSubmit: (state) => {
      console.log("onsubmit", state.value);
    },
  },
});

export const { onChange, handleSubmit } = formSlice.actions;

export default formSlice.reducer;
