import { createSlice } from "@reduxjs/toolkit";

export interface OpenNav {
  value: boolean;
}

const initialState: OpenNav = {
  value: false,
};

export const mobileNavSlice = createSlice({
  name: "openNav",
  initialState,
  reducers: {
    open: (state) => {
      state.value = !state.value;
    },
  },
});

export const { open } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;
