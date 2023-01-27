import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  commentCounter: 11,
  likeCounter: 5,
  retweetCounter: 23,
};

const interactionSlice = createSlice({
  name: "interact",
  initialState,
  reducers: {
    onComment(state) {
      state.commentCounter++;
    },
    onLike(state) {
      state.likeCounter++;
    },
    onRetweet(state) {
      state.retweetCounter++;
    },
    onBookMark(state, action) {},
  },
});

export default interactionSlice;

export const interactAction = interactionSlice.actions;
