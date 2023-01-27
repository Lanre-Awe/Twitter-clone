import { NavLink } from "react-router-dom";
import classes from "./subheading.module.css";

const SubHeadings = (props) => {
  return (
    <div className={classes.headingcontainer}>
      <NavLink
        activeClassName={classes.active}
        className={classes.link}
        to={`/${props.name}`}
      >
        <div>Tweets</div>
        <div className={classes.underline}></div>
      </NavLink>

      <NavLink
        className={classes.link}
        activeClassName={classes.active}
        to="/profile/with_replies"
      >
        <div className={classes.replyContainer}>Tweets & Replies</div>
        <div className={classes.underline}></div>
      </NavLink>

      <NavLink
        className={classes.link}
        activeClassName={classes.active}
        to="/profile/media"
      >
        <div>Media</div>
        <div className={classes.underline}></div>
      </NavLink>
      <NavLink
        className={classes.link}
        activeClassName={classes.active}
        to="/profile/likes"
      >
        <div>Likes</div>
        <div className={classes.underline}></div>
      </NavLink>
    </div>
  );
};

export default SubHeadings;
