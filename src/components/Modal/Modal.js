import { Fragment, useRef } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { useDispatch } from "react-redux";
import { profileAction } from "../../store/profileSlice";

const ModalOverlay = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const commentSubmit = () => {
    const enteredInput = inputRef.current.value;
    if (enteredInput.length > 1) {
      dispatch(
        profileAction.onComment({
          id: props.details[0].id - 1,
          tweetId: props.comment[0].id,
          replyId: Math.random(),
          reply: enteredInput,
        })
      );
      props.onSubmit();
    }
    console.log(props.comment);
    props.onClose();
  };

  return (
    <Fragment>
      <div className={classes.modalContainer}>
        <div className={classes.topOption}>
          <button className={classes.iconButton} onClick={props.onClose}>
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
          <button className={classes.replyButtonTop} onClick={commentSubmit}>
            reply
          </button>
        </div>
        {props.comment.map((item) => {
          return (
            <div>
              <div>
                <div className={classes.imageContainer}>
                  <img
                    src={props.details[0].profilepicture}
                    alt=""
                    className={classes.img}
                  />
                </div>
                <div className={classes.container}>
                  <div className={classes.nameContainer}>
                    <span className={classes.name}>
                      {props.details[0].name}
                    </span>
                    <span className={classes.username}>
                      {props.details[0].username}
                    </span>
                  </div>
                  <div className={classes.tweetContainer}>
                    <span className={classes.tweet}>{item.tweet}</span>
                  </div>
                </div>
              </div>
              <div className={classes.tagContainer}>
                <span className={classes.replytag}>replying to</span>
                <span className={classes.replyUserName}>
                  {props.details[0].username}
                </span>
              </div>
              <div>
                <textarea
                  cols="47"
                  rows="5"
                  className={classes.text}
                  placeholder="Tweet Your Reply"
                  ref={inputRef}
                ></textarea>
              </div>
            </div>
          );
        })}
        <div className={classes.actions}>
          {/* <button className={classes.iconButton}>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
              className={classes.icon2}
            >
              <g>
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
              </g>
            </svg>
          </button> */}
          <button className={classes.replyButton} onClick={commentSubmit}>
            Reply
          </button>
        </div>
      </div>
    </Fragment>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClick}
          comment={props.reply}
          details={props.pfdetails}
          onSubmit={props.onSubmit}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
