import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "dark",
  },

  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export const { toggleTheme } = themeSlice.actions;
