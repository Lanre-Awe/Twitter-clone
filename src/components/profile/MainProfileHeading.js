import { Link } from "react-router-dom";
import classes from "./mainProfile.module.css";

const MainProfileHeading = (props) => {
  return (
    <div className={classes.top}>
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
      <div className={classes.container}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.interactions}>{props.totalTweets} tweets</div>
      </div>
    </div>
  );
};

export default MainProfileHeading;
