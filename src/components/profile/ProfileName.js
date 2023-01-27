import classes from "./ProfileName.module.css";

const ProfileName = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.username}>{props.username}</div>
    </div>
  );
};

export default ProfileName;
