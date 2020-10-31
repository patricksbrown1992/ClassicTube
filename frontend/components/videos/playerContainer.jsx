import { connect } from "react-redux";
import Player from "./playerForm";
import { getLikes, createLike, deleteLike } from "../../actions/likeActions";
import {
  getDislikes,
  createDislike,
  deleteDislike,
} from "../../actions/dislikeActions";
import { getVideo, getVideos, updateVideo } from "../../actions/videoActions";

const msp = (state, ownProps) => {
  const video = state.entities.videos[ownProps.match.params.video_id];

  return {
    video: video,
    session: state.session,
    user: state.entities.user[state.session.id],
    videos: state.entities.videos,
    likes: state.entities.likes,
    dislikes: state.entities.dislikes,
  };
};

const mdp = (dispatch) => ({
  getVideo: (id) => dispatch(getVideo(id)),
  getVideos: () => dispatch(getVideos()),
  getLikes: (user) => dispatch(getLikes(user)),
  createLike: (like) => dispatch(createLike(like)),
  updateVideo: (video) => dispatch(updateVideo(video)),
  deleteLike: (id) => dispatch(deleteLike(id)),
  getDislikes: (user) => dispatch(getDislikes(user)),
  createDislike: (dislike) => dispatch(createDislike(dislike)),
  deleteDislike: (id) => dispatch(deleteDislike(id)),
});

export default connect(msp, mdp)(Player);
