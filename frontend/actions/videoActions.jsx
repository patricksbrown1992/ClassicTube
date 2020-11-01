import * as VideoAPIUtil from "../util/videoUtil";

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";

const receiveVideos = (videos) => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};

const receiveVideo = (video) => {
  debugger;
  return { type: RECEIVE_VIDEO, video };
};

export const getVideos = () => (dispatch) => {
  return VideoAPIUtil.getVideos().then((videos) => {
    dispatch(receiveVideos(videos));
  });
};

export const getVideo = (id) => (dispatch) => {
  return VideoAPIUtil.getVideo(id).then((video) => {
    dispatch(receiveVideo(video));
  });
};

export const updateVideo = (video) => (dispatch) =>
  VideoAPIUtil.updateVideo(video).then((video) =>
    dispatch(receiveVideo(video))
  );
