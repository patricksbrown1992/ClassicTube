import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

const PlayerForm = (props) => {
  useEffect(() => {
    props
      .getVideos()
      .then(() => updateVidViews())
      .then(() => props.getLikes(props.user))
      .then(() => props.getDislikes(props.user));
  }, []);
  function updateVidViews() {
    const video = props.videos[parseInt(props.match.params.video_id)];
    props.updateVideo({
      id: video.id,
      user_name: video.user_name,
      user_id: video.user_id,
      views: video.views + 1,
      dislikes: video.dislikes,
      likes: video.likes,
      title: video.title,
      runtime: video.runtime,
      year: video.year,
      description: video.description,
      genre: video.genre,
    });
  }

  function updateLike(e) {
    e.preventDefault();
    const video = props.videos[parseInt(props.match.params.video_id)];
    const newVideo = {
      id: video.id,
      user_name: video.user_name,
      user_id: video.user_id,
      views: video.views,

      title: video.title,
      runtime: video.runtime,
      year: video.year,
      description: video.description,
      genre: video.genre,
    };
    if (props.likes[video.id]) {
      newVideo.likes = video.likes - 1;
      newVideo.dislikes = video.dislikes;
      props
        .deleteLike(props.likes[video.id].id)
        .then(() => props.updateVideo(newVideo));
    } else {
      newVideo.likes = video.likes + 1;
      if (props.dislikes[video.id]) {
        newVideo.dislikes = video.dislikes - 1;
        props
          .createLike({
            user_id: props.user.id,
            video_id: video.id,
          })
          .then(() => props.deleteDislike(props.dislikes[video.id].id))
          .then(() => props.updateVideo(newVideo));
      } else {
        newVideo.dislikes = video.dislikes;
        props
          .createLike({
            user_id: props.user.id,
            video_id: video.id,
          })
          .then(() => props.updateVideo(newVideo));
      }
      props
        .createLike({
          user_id: props.user.id,
          video_id: video.id,
        })
        .then(() => props.updateVideo(newVideo));
    }
  }

  function updateDislike(e) {
    e.preventDefault();
    const video = props.videos[parseInt(props.match.params.video_id)];
    const newVideo = {
      id: video.id,
      user_name: video.user_name,
      user_id: video.user_id,
      views: video.views,

      title: video.title,
      runtime: video.runtime,
      year: video.year,
      description: video.description,
      genre: video.genre,
    };
    if (props.dislikes[video.id]) {
      newVideo.dislikes = video.dislikes - 1;
      newVideo.likes = video.likes;
      props
        .deleteDislike(props.dislikes[video.id].id)
        .then(() => props.updateVideo(newVideo));
    } else {
      newVideo.dislikes = video.dislikes + 1;
      if (props.likes[video.id]) {
        newVideo.likes = video.likes - 1;

        props
          .createDislike({
            user_id: props.user.id,
            video_id: video.id,
          })
          .then(() => props.deleteLike(props.likes[video.id].id))
          .then(() => props.updateVideo(newVideo));
      } else {
        newVideo.likes = video.likes;
        props
          .createDislike({
            user_id: props.user.id,
            video_id: video.id,
          })
          .then(() => props.updateVideo(newVideo));
      }
    }
  }

  let vid;

  if (props.video) {
    vid = props.video;
  } else if (props.videos[parseInt(props.match.params.video_id)]) {
    vid = props.videos[parseInt(props.match.params.video_id)];
  } else {
    vid = {
      video_link: "",
      title: "",
    };
  }
  const handleColorLike = props.likes[parseInt(props.match.params.video_id)]
    ? "green"
    : "gray";

  const handleColorDislike = props.dislikes[
    parseInt(props.match.params.video_id)
  ]
    ? "red"
    : "gray";

  return (
    <div className="video-player-div">
      <video controls src={vid.video_link} autoPlay loop></video>
      <div>{vid.title}</div>
      <div>{vid.user_name}</div>
      Views
      <div>{vid.views}</div>
      <i
        style={{ color: handleColorLike }}
        className="fas fa-thumbs-up"
        onClick={updateLike}
      ></i>
      <div>{vid.likes}</div>
      <i
        style={{ color: handleColorDislike }}
        className="fas fa-thumbs-down"
        onClick={updateDislike}
      ></i>
      <div>{vid.dislikes}</div>
    </div>
  );
};

export default PlayerForm;
