import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ButtonState {
  isVisible: boolean;
}

const initialState: ButtonState = {
  isVisible: false,
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setButton: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setButton } = buttonSlice.actions;
export default buttonSlice.reducer;
