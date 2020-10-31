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

const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <Link
        to={`/player/${video.id}`}
        style={{
          backgroundImage: `url(${video.image_link})`,
          backgroundSize: "100% 100%",
        }}
      ></Link>
      <div>{video.title}</div>
    </div>
  );
};

export default connect(msp, mdp)(VideoItem);
