import { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import Backdrop from "./Backdrop";
import classes from "./EditModal.module.css";

const EditForm = (props) => {
  const [profileName, setProfileName] = useState(props.name);
  const [bio, setBio] = useState(props.bio);
  const nameRef = useRef();
  const bioRef = useRef();
  const dispatch = useDispatch();

  let enteredNameRef;
  let enteredBioRef;
  const editNameHandler = (event) => {
    enteredNameRef = event.target.value;
    setProfileName(enteredNameRef);
  };

  const editBioHandler = (event) => {
    enteredBioRef = event.target.value;
    setBio(enteredBioRef);
  };
  const submitHandler = () => {
    props.changeBio(profileName, bio);
  };
  return (
    <div className={classes.modalContainer}>
      <div className={classes.topMenu}>
        <div className={classes.iconContainer}>
          <button onClick={props.onDone}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              className={classes.icon}
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className={classes.text}>
          <span>Edit profile</span>
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={submitHandler}>Save</button>
        </div>
      </div>
      <div className={classes.formContainer}>
        <form action="">
          <div>
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              value={profileName}
              ref={nameRef}
              onChange={editNameHandler}
            />
          </div>
          <div>
            <label htmlFor="Bio">Bio</label>
            <input
              type="text"
              value={bio}
              ref={bioRef}
              onChange={editBioHandler}
            />
          </div>
          <div>
            <label htmlFor="Location">Location</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

const EditModal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      {ReactDOM.createPortal(
        <EditForm
          name={props.name}
          bio={props.bio}
          changeBio={props.onChangeBio}
          onDone={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default EditModal;
