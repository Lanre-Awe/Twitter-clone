import { Fragment } from "react";
import Main from "../components/Main";
import Trending from "../components/Trending";

const Home = (props) => {
  return (
    <Fragment>
      <Main profile={props.profile} />
      <Trending />
    </Fragment>
  );
};

export default Home;
