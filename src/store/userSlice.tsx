import { createSlice } from "@reduxjs/toolkit";

interface StateProp {
  dark: Boolean;
}

const initialState: StateProp = {
  dark: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isDark: (state) => {
      state.dark = !state.dark; // Toggle dark mode
    },
  },
});

export const { isDark } = userSlice.actions;
export default userSlice.reducer;
