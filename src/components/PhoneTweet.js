import classes from "./phoneTweet.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { profileAction } from "../store/profileSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const PhoneTweet = () => {
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();
  const tweetRef = useRef();

  const postHandler = () => {
    const tweet = tweetRef.current.value;
    if (tweet.length < 1 && !imageUrl) {
      return;
    }
    dispatch(
      profileAction.onTweet({
        id: Math.random(),
        tweet: tweet,
        image: imageUrl,
        comment: "",
        reply: [],
      })
    );
    tweetRef.current.value = "";
    setImageUrl("");
  };
  const fileHandler = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const { result } = event.target;
      if (result) {
        setImageUrl(result);
      }
    };

    reader.readAsDataURL(file);
  };
  const closePreview = () => {
    setImageUrl(false);
  };
  return (
    <div className={classes.main}>
      <div className={classes.components}>
        <div className={classes.actionContainer}>
          <div className={classes.back}>
            <Link to="/home">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="white"
                class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                className={classes.backicon}
              >
                <g>
                  <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
                </g>
              </svg>
            </Link>
          </div>
          <button className={classes.tweet} onClick={postHandler}>
            <Link to="/home"> Tweet</Link>
          </button>
        </div>
        <div className={classes.tweetDiv}>
          <button className={classes.block}>Everyone </button>
          <textarea
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="What's Happening?"
            className={classes.text}
            ref={tweetRef}
          ></textarea>
          {imageUrl && (
            <div className={classes.preview}>
              <div className={classes.imageCancel}>
                <span onClick={closePreview}>X</span>
              </div>
              <img src={imageUrl} alt="" />
            </div>
          )}
          <div>
            <div className={classes.iconContainer}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-10ptun7 r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"
                className={classes.icon2}
              >
                <g>
                  <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path>
                </g>
              </svg>
            </div>
            <button className={classes.block1}>Everyone can reply</button>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <label htmlFor="file-input">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                className={classes.icon}
              >
                <g>
                  <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                </g>
              </svg>
            </label>
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={fileHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneTweet;
