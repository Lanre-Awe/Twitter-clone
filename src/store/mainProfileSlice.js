import { createSlice } from "@reduxjs/toolkit";

const getProfile = () => {
  const profile = localStorage.getItem("PROFILE");
  if (profile === null) {
    return [];
  }
  return JSON.parse(profile);
};
const initialState = {
  id: getProfile(),
};

const mainProfileSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    onOpen(state, action) {
      state.id = action.payload;
      localStorage.setItem("PROFILE", JSON.stringify(action.payload));
    },
    onEditName(state, action) {
      state.id[0].name = action.payload;
    },
    onEditBio(state, action) {
      state.id[0].bio = action.payload;
    },
  },
});

export default mainProfileSlice;
export const mainActions = mainProfileSlice.actions;
