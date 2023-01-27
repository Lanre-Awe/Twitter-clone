import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweet: [
    {
      id: 1,
      name: "Joshua",
      username: " @yabajosh",
      tweet: "Looking good in my dripped out outfit😌",
      profileImage:
        "https://pbs.twimg.com/profile_images/1565118155843768321/L5hwcoI0_400x400.jpg",
      image:
        "https://pbs.twimg.com/media/FhOjJ8-VUAANtWu?format=jpg&name=large",
      retweet: "You Retweeted",
    },
    {
      id: 2,
      name: "Adeola😎",
      username: " @adebryno",
      profileImage:
        "https://pbs.twimg.com/profile_images/1478115267385470979/ijvSgAxN_400x400.jpg",
      tweet: "serving legs😍😍😘",
      image:
        "https://pbs.twimg.com/media/FhNgQ0IWQAMFt3z?format=jpg&name=large",
    },
    {
      id: 3,
      name: "Gamaliel😶‍🌫️😌🥶",
      username: " @manticore",
      profileImage:
        "https://pbs.twimg.com/profile_images/1563318155056820228/kt1-ucmK_400x400.jpg",
      tweet: "Gaming is fun bro. life of a gamer🎮🕹️",
    },
  ],
};

const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    onPost(state, action) {
      const post = state.tweet;
      const newPost = action.payload;
      post.push(newPost);
    },
  },
});

export const tweetAction = tweetSlice.actions;
export default tweetSlice;
