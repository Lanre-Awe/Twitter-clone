import classes from "./ProfileDetails.module.css";

const ProfileDetails = (props) => {
  return (
    <div>
      <div className={classes.about}>
        <span>{props.bio}</span>
      </div>
      <div>
        <div className={classes.iconcontainer}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            className={classes.icon1}
          >
            <g>
              <path d="M19.5 6H17V4.5C17 3.12 15.88 2 14.5 2h-5C8.12 2 7 3.12 7 4.5V6H4.5C3.12 6 2 7.12 2 8.5v10C2 19.88 3.12 21 4.5 21h15c1.38 0 2.5-1.12 2.5-2.5v-10C22 7.12 20.88 6 19.5 6zM9 4.5c0-.28.23-.5.5-.5h5c.28 0 .5.22.5.5V6H9V4.5zm11 14c0 .28-.22.5-.5.5h-15c-.27 0-.5-.22-.5-.5v-3.04c.59.35 1.27.54 2 .54h5v1h2v-1h5c.73 0 1.41-.19 2-.54v3.04zm0-6.49c0 1.1-.9 1.99-2 1.99h-5v-1h-2v1H6c-1.1 0-2-.9-2-2V8.5c0-.28.23-.5.5-.5h15c.28 0 .5.22.5.5v3.51z"></path>
            </g>
          </svg>
          <span className={classes.icondetails}> {props.info.interests}</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-1xvli5t r-13hce6t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            className={classes.icon2}
          >
            <g>
              <path d="M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"></path>
            </g>
          </svg>
        </div>
        <div className={classes.iconcontainer}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            className={classes.icon3}
          >
            <g>
              <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
            </g>
          </svg>
          <span className={classes.icondetails}>{props.info.location}</span>
        </div>
        <div className={classes.iconcontainer}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-1bwzh9t r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
            className={classes.icon4}
          >
            <g>
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
            </g>
          </svg>
          <span className={classes.icondetails}>
            Joined {props.info.joined}
          </span>
        </div>
      </div>
      <div>
        <div className={classes.fans}>
          <span className={classes.followCount}>{props.follow.following}</span>{" "}
          <span className={classes.followText}>Following</span>
        </div>
        <div className={classes.fans}>
          <span className={classes.followCount}>{props.follow.followers}</span>{" "}
          <span className={classes.followText}>Followers</span>
        </div>
      </div>
      <div className={classes.fans}>
        <span className={classes.followText}>
          Not Followed By Anyone You Follow
        </span>
      </div>
    </div>
  );
};

export default ProfileDetails;
