import { createSlice } from "@reduxjs/toolkit";
const getTweets = () => {
  const tweets = localStorage.getItem("TWEET");
  if (tweets === null) {
    return [];
  }
  return JSON.parse(tweets);
};

const initialState = {
  profile: [
    {
      id: 1,
      name: "lanre",
      username: " @lanreawe",
      profilepicture:
        "https://pbs.twimg.com/profile_images/1612528884485873667/ZbrL2lPl_400x400.jpg",
      profilebanner:
        "https://pbs.twimg.com/profile_banners/2563046829/1589941092/1080x360",
      totalTweets: "3k",
      bio: "Developer, Gamer and Tech bro",
      otherInfo: {
        interests: "Technology & Gaming",
        location: "Lagos, Nigeria",
        joined: "November, 2022",
      },
      follow: {
        following: "11.2k",
        followers: "103k",
      },
      imageDisplay: {
        img1: "https://pbs.twimg.com/media/Fg0RWOLXEAMI80w?format=jpg&name=small",
        img2: "https://pbs.twimg.com/media/FgtTZoeWQAEWPUx?format=jpg&name=360x360",
        img3: "https://pbs.twimg.com/media/FgtIMx5X0AE5e39?format=jpg&name=360x360",
        img4: "https://pbs.twimg.com/media/FgoJOL7XkAErqoa?format=jpg&name=240x240",
        img5: "https://pbs.twimg.com/ext_tw_video_thumb/1588081500951560193/pu/img/V4Hycj9jk7cWQ0DU?format=jpg&name=240x240",
        img6: "https://pbs.twimg.com/media/Fgki-QLWYAEUH0D?format=jpg&name=240x240",
      },
      tweet: getTweets(),
    },
    {
      id: 2,
      name: "Joshua",
      username: " @yabajosh",
      profilepicture:
        "https://pbs.twimg.com/profile_images/1565118155843768321/L5hwcoI0_400x400.jpg",
      profilebanner:
        "https://pbs.twimg.com/profile_banners/262794965/1664430367/1500x500",
      totalTweets: "6,234",
      bio: "Artist",
      otherInfo: {
        interests: "Music & Arts",
        location: "Abuja, Nigeria",
        joined: "September, 2022",
      },
      follow: {
        following: "102",
        followers: "2M",
      },
      imageDisplay: {
        img1: "https://pbs.twimg.com/media/FhOjJ8-VUAANtWu?format=jpg&name=240x240",
        img2: "https://pbs.twimg.com/media/FhOixvDVUAA8T_0?format=jpg&name=240x240",
        img3: "https://pbs.twimg.com/media/FhOie4JUcAAsAtI?format=jpg&name=240x240",
        img4: "https://pbs.twimg.com/media/FhLiGJNUYAEfcyY?format=jpg&name=240x240",
        img5: "https://pbs.twimg.com/ext_tw_video_thumb/1590582018663858176/pu/img/bwdPkqIGLkz-cDE7?format=jpg&name=360x360",
        img6: "https://pbs.twimg.com/media/FhD6qG0WIAAlTkZ?format=jpg&name=900x900https://pbs.twimg.com/media/FhD6qG0WIAAlTkZ?format=jpg&name=900x900",
      },
      tweet: [
        {
          id: 1,
          tweet: "Looking good in my dripped out outfit😌",
          image:
            "https://pbs.twimg.com/media/FhOjJ8-VUAANtWu?format=jpg&name=large",
          retweeted: false,
          comment: 11,
          like: 5,
          retweet: 23,
          reply: [],
        },
      ],
    },
    {
      id: 3,
      name: "Adeola😎",
      username: " @adebryno",
      profilepicture:
        "https://pbs.twimg.com/profile_images/1592381355484221450/yHJHs4vN_400x400.jpg",
      profilebanner:
        "https://pbs.twimg.com/profile_banners/964161129516855296/1650528106/1500x500",
      totalTweets: "212",
      bio: "Pretty girl, Living life a day at a time🏖️",
      otherInfo: {
        interests: "Travels",
        location: "London, England",
        joined: "June, 2019",
      },
      follow: {
        following: "1,200",
        followers: "12.3k",
      },
      imageDisplay: {
        img1: "https://pbs.twimg.com/media/FhNoKxgXgAEt4RU?format=jpg&name=240x240",
        img2: "https://pbs.twimg.com/media/FhNoKxkXgAIEP3L?format=jpg&name=240x240",
        img3: "https://pbs.twimg.com/media/FhNoKxhWIAEnr2l?format=jpg&name=240x240",
        img4: "https://pbs.twimg.com/media/FhNoKxpXoAEX6zK?format=jpg&name=240x240",
        img5: "https://pbs.twimg.com/media/FfsVXCYWIAAj95B?format=jpg&name=240x240",
        img6: "https://pbs.twimg.com/media/FfsVXCaWAAAEDhI?format=jpg&name=240x240",
      },
      tweet: [
        {
          id: 1,
          tweet: "serving legs😍😍😘",
          image:
            "https://pbs.twimg.com/media/FhNgQ0IWQAMFt3z?format=jpg&name=large",
          retweeted: false,
          comment: 11,
          like: 5,
          retweet: 23,
          reply: [],
        },
      ],
    },
    {
      id: 4,
      name: "Gamaliel😶‍🌫️😌🥶",
      username: " @manticore",
      profilepicture:
        "https://pbs.twimg.com/profile_images/1610593398464864257/jiTtSQ5O_400x400.jpg",
      profilebanner:
        "https://pbs.twimg.com/profile_banners/1499363978450984962/1661558538/1500x500",
      totalTweets: "4,212",
      bio: "I game for a living; bite me",
      otherInfo: {
        interests: "Gaming",
        location: "Sydney, Australia",
        joined: "April, 2021",
      },
      follow: {
        following: "1,334",
        followers: "1,293",
      },
      imageDisplay: {
        img1: "https://pbs.twimg.com/media/FhOunP7WIBAwxMS?format=jpg&name=360x360",
        img2: "https://pbs.twimg.com/media/FhOqGPnXgAAkAKe?format=jpg&name=240x240",
        img3: "https://pbs.twimg.com/media/FhPD-VTXoAcIUAx?format=jpg&name=240x240",
        img4: "https://pbs.twimg.com/media/FhOX-YWXwAAuS2L?format=jpg&name=240x240",
        img5: "https://pbs.twimg.com/media/FhOacduXEA0788z?format=jpg&name=240x240",
        img6: "https://pbs.twimg.com/media/FhM29L6XkAMLJhb?format=jpg&name=240x240",
      },
      tweet: [
        {
          id: 1,
          tweet: "Gaming is fun bro. life of a gamer🎮🕹️",
          retweeted: false,
          comment: 11,
          like: 5,
          retweet: 23,
          reply: [],
        },
      ],
    },
  ],
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    onTweet(state, action) {
      const tweet = state.profile[0].tweet;
      const newTweet = action.payload;
      tweet.unshift(newTweet);
      localStorage.setItem("TWEET", JSON.stringify(tweet));
    },
    onComment(state, action) {
      const reply = state.profile[action.payload.id].tweet[0].reply;
      reply.push({
        id: action.payload.replyId,
        reply: action.payload.reply,
      });
      console.log(action.payload);
    },
    onDelete(state, action) {
      state.profile[action.payload.id].tweet[0].reply = action.payload.reply;
    },
    onLike(state, action) {
      console.log(action.payload);
      let profileState = state.profile;
      profileState = action.payload.profile;
      const tweetArray = profileState[0].tweet;
      let tweet = tweetArray.filter(
        (item) => item.id === action.payload.tweetId
      );
      profileState = tweet[0].like;
      console.log(profileState);
      profileState++;
    },
    onRetweet(state, action) {
      const tweet = state.profile[0].tweet;
      const newTweet = action.payload.tweet;
      tweet.push(newTweet);
    },

    onRetweeted(state, action) {
      state.profile[0].tweet.filter(
        (item) => item.id === action.payload.id
      )[0].retweeted = action.payload.true;
    },
    onEditName(state, action) {
      state.profile[0].name = action.payload;
    },
    onEditBio(state, action) {
      state.profile[0].bio = action.payload;
    },
  },
});

export const profileAction = profileSlice.actions;
export default profileSlice;
