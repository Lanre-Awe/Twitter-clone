import { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./Modal/DeleteModal";
import classes from "./reply.module.css";

const Reply = (props) => {
  const profile = props.profile.filter((item) => item.id === props.profileId);
  const tweetLike = profile[0].tweet[0].like;
  let counter = tweetLike;

  const [style, setStyle] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // const [isCommenting, setIsCommenting] = useState(false);
  const [like, setLike] = useState(true);
  const [likeCounter, setLikeCounter] = useState(tweetLike);
  const [deleteModal, setDeleteModal] = useState(false);

  const styleHandler = () => {
    setStyle((style) => !style);
    setLike((like) => !like);

    if (like) {
      setLikeCounter(counter + 1);
    } else {
      setLikeCounter(likeCounter - 1);
    }
    if (!likeCounter) {
      setLikeCounter(1);
    }
  };
  const hoverHandler = () => {
    setIsHovering(true);
  };

  const leaveHandler = () => {
    setIsHovering(false);
  };

  const commentHandler = () => {
    // setIsCommenting(true);
    // if (typeof window != "undefined" && window.document) {
    //   document.body.style.overflow = "hidden";
    // }
    // props.onIdentify(props.id, props.profileId);
  };

  const profileHandler = () => {
    // const filteredInfo = profileInfo.filter(
    //   (info) => info.id === props.profileId
    // );
    // dispatch(mainActions.onOpen(filteredInfo));
  };

  const retweet = () => {
    // props.onRetweet(props.id, props.profileId);
  };
  const deleteHandler = () => {
    setDeleteModal(true);
    console.log(props.id);
  };

  const RemoveHandler = () => {
    props.onRemove(props.id);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <span className={classes.info}>{props.retweet}</span>
        </div>
        <div className={classes.profileContainer}>
          <div className={classes.pfpdiv}>
            <Link to="/profile">
              <img
                src={props.pfp}
                alt=""
                className={classes.pfp}
                onClick={profileHandler}
              />
            </Link>
          </div>
          <div className={classes.detailsContainer}>
            <div className={classes.name}>
              <div className={classes.name1}>
                <div className={classes.nameContainer}>
                  {props.name}
                  <span className={classes.username}>{props.username}</span>
                </div>
                <div className={classes.ellipsisContainer}>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                    className={classes.ellipsis}
                    onClick={deleteHandler}
                  >
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                    </g>
                  </svg>
                  {deleteModal && <DeleteModal onClick={RemoveHandler} />}
                </div>
              </div>
            </div>
            <div className={classes.tweet}>{props.reply}</div>
          </div>
        </div>
        {props.image && (
          <div>
            <img src={props.image} alt="" className={classes.tweetpic} />
          </div>
        )}
        <div className={classes.majorIconContainer}>
          <button className={classes.mainContainer} onClick={commentHandler}>
            <div className={classes.commentIconContainer}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                className={classes.commentIcon}
              >
                <g>
                  <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                </g>
              </svg>
            </div>
            <span className={classes.commentCounter}></span>
          </button>
          <button className={classes.mainContainer} onClick={retweet}>
            <div className={classes.retweetIconContainer}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                className={classes.retweetIcon}
              >
                <g>
                  <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path>
                </g>
              </svg>
            </div>
            <span className={classes.retweetCounter}></span>
          </button>
          <button
            className={classes.mainContainer}
            onClick={styleHandler}
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
          >
            <div className={classes.likeIconContainer}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                style={{
                  fill: style ? "#cb3262" : "",
                  stroke:
                    style && !isHovering
                      ? "none"
                      : isHovering
                      ? "#cb3262"
                      : "gray",
                }}
                className={classes.likeIcon}
              >
                <g>
                  <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                </g>
              </svg>
            </div>
            <span
              className={classes.likeCounter}
              style={{ color: style || isHovering ? "#cb3262" : "grey" }}
            >
              {/* {likeCounter} */}
            </span>
          </button>
          <button className={classes.mainContainer}>
            <div className={classes.interactionIconContainer}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                className={classes.interactionIcon}
              >
                <g>
                  <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default Reply;
