import React, { useState, useEffect } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";

import { connect } from "react-redux";
import { clearErrors, logout } from "../../actions/sessionActions";
import { getVideos } from "../../actions/videoActions";

const msp = (state) => ({
  user: state.entities.user,
  videos: state.entities.videos,
  session: state.session,
});

const mdp = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  getVideos: () => dispatch(getVideos()),
});

const NavForm = (props) => {
  const [search, updateSearch] = useState(() => "");

  function handleClick(e) {
    e.preventDefault();

    return <Redirect to={`/search/${search}`} />;
  }

  return (
    <div className="nav-row">
      <Link to="/videos">
        <img
          style={{ width: "35px", height: "35px" }}
          src={window.logo}
          alt="ClassicTube Icon"
        />
      </Link>
      <button onClick={() => props.logout()}>Sign Out</button>
      <input
        style={{ width: "600px", height: "35px" }}
        type="text"
        name="search"
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
      />
      <button onClick={handleClick}>Eye glass</button>
    </div>
  );
};

export default withRouter(connect(msp, mdp)(NavForm));
