import classes from "./Main.module.css";
import PhoneNavigation from "./PhoneNavigation";
import ShowTweets from "./ShowTweets";
import TopMenu from "./Top-menu";
import TweetArea from "./TweetArea";
import TweetCard from "./TweetCard";

const Main = (props) => {
  return (
    <>
      <PhoneNavigation />
      <div className={classes.main}>
        <div>
          <TopMenu />
          <TweetArea />
          <ShowTweets />
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
      </div>
    </>
  );
};

export default Main;
