import { Route, Switch } from "react-router-dom";
import classes from "./mainProfile.module.css";
import MainProfileHeading from "./MainProfileHeading";
import ProfileDetails from "./profileDetails";
import ProfileLikes from "./ProfileLikes";
import ProfileMedia from "./ProfileMedia";
import ProfileName from "./ProfileName";
import Profilepicture from "./ProfilePicture";
import ProfileReplies from "./ProfileReplies";
import ProfileTweets from "./ProfileTweets";
import SubHeadings from "./SubHeadings";

const MainProfile = (props) => {
  return (
    <div className={classes.main}>
      <div>
        <MainProfileHeading name={props.name} totalTweets={props.totalTweets} />
        <Profilepicture
          banner={props.banner}
          pfp={props.pfp}
          name={props.name}
          bio={props.bio}
        />
        <ProfileName name={props.name} username={props.username} />
        <ProfileDetails
          bio={props.bio}
          info={props.info}
          follow={props.follow}
        />
        <SubHeadings name={props.name} />
        <ProfileTweets profile={props.details} />
        <Switch>
          <Route path="/profile/with_replies" exact>
            <ProfileReplies />
          </Route>
          <Route path="/profile/media" exact>
            <ProfileMedia />
          </Route>
          <Route path="/profile/likes" exact>
            <ProfileLikes />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default MainProfile;
