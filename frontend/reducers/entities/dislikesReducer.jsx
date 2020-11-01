import { merge } from "lodash";
import {
  RECEIVE_DISLIKE,
  CLEAR_DISLIKES,
  RECEIVE_DISLIKES,
  DELETE_DISLIKE,
} from "../../actions/dislikeActions";
const dislikesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DISLIKE:
      return merge({}, state, { [action.dislike.video_id]: action.dislike });
    case DELETE_DISLIKE:
      const newState = merge({}, state);
      delete newState[action.dislike.video_id];
      return newState;
    case CLEAR_DISLIKES:
      return {};
    case RECEIVE_DISLIKES:
      const dislikes = {};
      action.dislikes.forEach((dislike) => {
        dislikes[dislike.video_id] = dislike;
      });

      return merge({}, state, dislikes);
    default:
      return state;
  }
};

export default dislikesReducer;
