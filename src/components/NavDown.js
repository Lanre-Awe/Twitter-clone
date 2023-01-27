import classes from "./phoneNavigation.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../store/mainProfileSlice";

const NavDown = () => {
  const dispatch = useDispatch();
  const mainProfile = useSelector((state) => state.profile.profile);
  const name = mainProfile[0].name;
  const mainHandler = () => {
    dispatch(mainActions.onOpen([mainProfile[0]]));
  };
  return (
    <div className={classes.navigation}>
      <div className={classes.mainlogo}>
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-twitter"
            viewBox="0 0 16 16"
            id="IconChangeColor"
            className={classes.icons}
          >
            <path
              d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              id="mainIconPathAttribute"
              fill="#ffffff"
            ></path>
          </svg>
        </Link>
      </div>

      <div className={classes.navblocks}>
        <Link to="/home">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={classes.icons}
            fill="white"
            class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
          >
            <g>
              <path d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"></path>
            </g>
          </svg>
        </Link>
      </div>
      <div className={classes.navblocks}>
        <Link to="/explore">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="white"
            class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
            className={classes.icon}
          >
            <g>
              <path d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"></path>
            </g>
          </svg>
        </Link>
      </div>

      <div className={classes.navblocks} onClick={mainHandler}>
        <Link to={`/${name}`}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={classes.icons}
            fill="white"
            class="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
          >
            <g>
              <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NavDown;
