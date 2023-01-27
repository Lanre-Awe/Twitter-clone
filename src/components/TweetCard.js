import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileAction } from "../store/profileSlice";
import Tweet from "./Tweet";

const TweetCard = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const [comment, setComment] = useState("");
  const [profileDetails, setProfileDetails] = useState("");

  const getId = (id, profileId) => {
    const filtered = props.tweet.filter((item) => item.id === id);
    setComment(filtered);
    const filteredDetails = profile.filter((item) => item.id === profileId);
    setProfileDetails(filteredDetails);
  };
  const retweetHandler = (id, profileId) => {
    const filteredDetails = profile.filter((item) => item.id === profileId);
    const filteredTweet = filteredDetails[0].tweet.filter(
      (item) => item.id === id
    );
    const tweet = filteredTweet[0];
    console.log(tweet);
    dispatch(profileAction.onRetweet({ tweet: tweet }));
  };

  const onGetID = (id, tweetId) => {
    console.log(id, tweetId);
    const filteredTweet = props.tweet.filter((item) => item.id === tweetId);
    const filteredReply = filteredTweet[0].reply.filter(
      (item) => item.id !== id
    );
    console.log(filteredReply);
    console.log(props.id);
    dispatch(
      profileAction.onDelete({ id: props.id - 1, reply: filteredReply })
    );
  };

  return (
    <Fragment>
      {props.tweet.map((item) => {
        return (
          <Tweet
            key={item.id}
            id={item.id}
            profileId={props.id}
            pfp={props.pfp}
            name={props.name}
            username={props.username}
            image={item.image}
            tweet={item.tweet}
            onIdentify={getId}
            comment={comment}
            details={profileDetails}
            profile={props.profileInfo}
            onRetweet={retweetHandler}
            reply={item.reply}
            replyProfile={profile}
            onReplyId={onGetID}
            tweeted={props.tweet}
          />
        );
      })}
    </Fragment>
  );
};

export default TweetCard;
