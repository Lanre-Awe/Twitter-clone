import classes from "./mainProfile.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import EditModal from "../Modal/EditModal";
import { profileAction } from "../../store/profileSlice";
import { mainActions } from "../../store/mainProfileSlice";

const Profilepicture = (props) => {
  const mainName = useSelector((state) => state.profile.profile[0].name);
  const info = useSelector((state) => state.main.id[0]);
  const [button, setButton] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.name === mainName) {
      setButton(true);
    }
  }, [props.name, mainName]);
  const editProfileHandler = () => {
    setIsEditing(true);
  };

  const notEdit = () => {
    return;
  };

  const ProfileChangeHandler = (profileName, bio) => {
    dispatch(mainActions.onEditName(profileName));
    dispatch(mainActions.onEditBio(bio));
    dispatch(profileAction.onEditName(profileName));
    dispatch(profileAction.onEditBio(bio));
    setIsEditing(false);
    console.log(info);
  };

  const closeForm = () => {
    setIsEditing(false);
  };
  return (
    <Fragment>
      {isEditing && (
        <EditModal
          name={props.name}
          bio={props.bio}
          onChangeBio={ProfileChangeHandler}
          onClose={closeForm}
        />
      )}
      <div className={classes.headercontainer}>
        <div className={classes.divcontainer}>
          <img className={classes.headerimage} src={props.banner} alt="" />
        </div>
        <div className={classes.imgcontainer}>
          <img className={classes.profileimage} src={props.pfp} alt="" />
        </div>
        <div className={classes.actioncontainer}>
          {!button && (
            <div className={classes.ellipsiscontainer}>
              <div className={classes.ellipsis}></div>
              <div className={classes.ellipsis}></div>
              <div className={classes.ellipsis}></div>
            </div>
          )}

          {!button && (
            <div className={classes.messagecontainer}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                fill="white"
                className={classes.messageicon}
              >
                <g>
                  <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                </g>
              </svg>
            </div>
          )}
          <div className={classes.followcontainer}>
            <button
              className={classes.followbutton}
              style={{
                backgroundColor: button ? "inherit" : "",
                border: button ? "1px solid white" : "",
                color: button ? "white" : "",
                marginLeft: button ? "45px" : "",
              }}
              onClick={button ? editProfileHandler : notEdit}
            >
              {button ? "Edit Profile" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profilepicture;
