import { Fragment } from "react";
import Backdrop from "./Backdrop";
import ReactDOM from "react-dom";
import classes from "./SideMenuModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mainActions } from "../../store/mainProfileSlice";

const Menu = (props) => {
  const profile = useSelector((state) => state.profile.profile[0]);

  const dispatch = useDispatch();
  const mainHandler = () => {
    props.onClose();
    dispatch(mainActions.onOpen([profile]));
  };
  const closeModal = () => {
    props.onClose();
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.heading}>
          <span>Account info</span>
          <button onClick={closeModal} className={classes.buttonContainer}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              className={classes.icons}
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className={classes.profile}>
          <div className={classes.pfpContainer}>
            <img src={profile.profilepicture} alt="" />
          </div>
          <div className={classes.nameBlock}>
            <div className={classes.name}>{profile.name}</div>
            <div className={classes.username}>{profile.username}</div>
          </div>
          <div className={classes.follow}>
            <span className={classes.following}>
              {profile.follow.following}
              <span>Following</span>
            </span>
            <span className={classes.followers}>
              {profile.follow.followers}
              <span>Followers</span>
            </span>
          </div>
        </div>
        <div className={classes.navBlock} onClick={mainHandler}>
          <Link to={`/${profile.name}`}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="white"
              class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
              className={classes.icons}
            >
              <g>
                <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
              </g>
            </svg>
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

const SideMenu = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      {ReactDOM.createPortal(
        <Menu onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default SideMenu;
