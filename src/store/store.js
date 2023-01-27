import { configureStore } from "@reduxjs/toolkit";
import interactionSlice from "./interactionSlice";
import mainProfileSlice from "./mainProfileSlice";
import profileSlice from "./profileSlice";
import tweetSlice from "./tweetSlice";

const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    tweet: tweetSlice.reducer,
    main: mainProfileSlice.reducer,
    interact: interactionSlice.reducer,
  },
});

export default store;
