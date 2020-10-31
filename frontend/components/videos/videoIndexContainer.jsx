import { connect } from "react-redux";
import VideoIndexForm from "./videoIndexForm";
import { clearErrors, logout } from "../../actions/sessionActions";
import { getVideos } from "../../actions/videoActions";
import { Route, Redirect, withRouter } from "react-router-dom";

const msp = (state) => ({
  user: state.entities.user,
  videos: state.entities.videos,
});

const mdp = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  logout: () => dispatch(logout()),
  getVideos: () => dispatch(getVideos()),
});

export default withRouter(connect(msp, mdp)(VideoIndexForm));
