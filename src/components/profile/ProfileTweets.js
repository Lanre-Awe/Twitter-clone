import TweetCard from "../TweetCard";

const ProfileTweets = (props) => {
  return (
    <div>
      {props.profile.map((item) => {
        return (
          <TweetCard
            key={item.id}
            id={item.id}
            tweet={item.tweet}
            pfp={item.profilepicture}
            name={item.name}
            username={item.username}
            profileInfo={props.profile}
          />
        );
      })}
    </div>
  );
};

export default ProfileTweets;
