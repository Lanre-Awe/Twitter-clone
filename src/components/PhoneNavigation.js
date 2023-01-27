import classes from "./phoneNavigation.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SideMenu from "./Modal/SideMenuModal";
import { useState } from "react";

const PhoneNavigation = () => {
  const pfp = useSelector((state) => state.profile.profile[0]);
  const [show, setShow] = useState(false);

  const sideMenuHandler = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };
  return (
    <>
      {show && <SideMenu onClose={closeModal} />}
      <div className={classes.topContainer}>
        <div className={classes.image} onClick={sideMenuHandler}>
          <img src={pfp.profilepicture} alt="" className={classes.pfp} />
        </div>
        <div className={classes.mainlogoPhone}>
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
              id="IconChangeColor"
              className={classes.iconPhone}
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                id="mainIconPathAttribute"
                fill="#1da1f2"
              ></path>{" "}
            </svg>
          </Link>
        </div>
      </div>
      <div className={classes.tweeticon}>
        <Link to="/compose/tweet">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
            fill="white"
            className={classes.icons}
          >
            <g>
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
            </g>
          </svg>
        </Link>
      </div>
    </>
  );
};

export default PhoneNavigation;
