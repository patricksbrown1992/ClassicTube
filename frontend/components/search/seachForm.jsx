import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { clearErrors, logout } from "../../actions/sessionActions";
import { getVideos } from "../../actions/videoActions";
import { Link } from "react-router-dom";
import { Route, Redirect, withRouter } from "react-router-dom";
import SearchItem from "./searchItem";

const msp = (state) => ({
  user: state.entities.user,
  videos: state.entities.videos,
});

const mdp = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  getVideos: () => dispatch(getVideos()),
});

const SearchForm = (props) => {
  let searched = Object.values(props.videos).filter((video) => {
    return video.title
      .toUpperCase()
      .includes(props.match.params.search_string.toUpperCase());
  });

  useEffect(() => {
    props.getVideos();
  }, []);

  const vids = searched.map((video) => {
    return <SearchItem video={video} />;
  });
  return <div className="video-col">{vids}</div>;
};

export default withRouter(connect(msp, mdp)(SearchForm));
