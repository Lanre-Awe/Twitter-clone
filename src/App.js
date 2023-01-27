import Navigation from "./components/Navigation";
import { Redirect, Route, Switch } from "react-router-dom";
import { Fragment, Suspense } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import ComposeTweet from "./pages/ComposeTweet";
import NavDown from "./components/NavDown";
import React from "react";
import Loader from "./components/Modal/Loader";

const Home = React.lazy(() => import("./pages/Home"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Explore = React.lazy(() => import("./pages/Explore"));

function App() {
  const details = useSelector((state) => state.profile.profile);
  const mainId = useSelector((state) => state.main.id);
  return (
    <Fragment>
      <Suspense fallback={<Loader />}>
        <Navigation />
        <NavDown />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home profile={details} />
          </Route>
          <Route path="/compose/tweet">
            <ComposeTweet />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/:name">
            <Profile profileId={mainId} />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
