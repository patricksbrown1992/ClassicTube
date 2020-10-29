import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashBody from "./splash/splashForm";
import SignUp from "./signUp/signUpForm";
import Login from "./logIn/logInForm";
import { Authorized, ProtectedRoute } from "../util/routeUtil";
import VideoIndex from "../components/videos/videoIndexContainer";
import Player from "../components/videos/playerContainer";
// import List from "../components/list/listContainer";
import SearchForm from "../components/search/seachForm";
const App = () => (
  <>
    <Switch>
      <Authorized path="/signup" component={SignUp} />
      <Authorized path="/login" component={Login} />
      <ProtectedRoute path="/videos" component={VideoIndex} />
      <ProtectedRoute path="/player/:video_id" component={Player} />
      <ProtectedRoute path="/search/:search_string" component={SearchForm} />
      <Authorized exact path="/" component={SplashBody} />
    </Switch>
  </>
);

export default App;
