import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { clearErrors, logout } from "../../actions/sessionActions";
import { getVideos } from "../../actions/videoActions";
import { Link } from "react-router-dom";

const msp = (state) => ({
  user: state.entities.user,
});

const mdp = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  getVideos: () => dispatch(getVideos()),
});

const SearchItem = ({ video }) => {
  return (
    <div className="search-item">
      <Link
        to={`/player/${video.id}`}
        style={{
          backgroundImage: `url(${video.image_link})`,
          backgroundSize: "100% 100%",
        }}
      ></Link>
      <div className="search-right">
        <div className="search-title">{video.title}</div>
        <div className="search-description">{video.description}</div>
      </div>
    </div>
  );
};

export default connect(msp, mdp)(SearchItem);
