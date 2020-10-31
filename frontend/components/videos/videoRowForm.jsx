import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { clearErrors, logout } from "../../actions/sessionActions";
import { getVideos } from "../../actions/videoActions";

const msp = (state) => ({
  user: state.entities.user,
});

const mdp = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  getVideos: () => dispatch(getVideos()),
});
import VideoItem from "./videoItem";

const VideoRowForm = (props) => {
  const row = props.vids.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="video-row">{row}</div>;
};

export default connect(msp, mdp)(VideoRowForm);
