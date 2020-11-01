import { merge } from "lodash";
import {
  RECEIVE_LIKES,
  CLEAR_LIKES,
  RECEIVE_LIKE,
  DELETE_LIKE,
} from "../../actions/likeActions";
const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, { [action.like.video_id]: action.like });
    case DELETE_LIKE:
      const newState = merge({}, state);
      delete newState[action.like.video_id];
      return newState;
    case CLEAR_LIKES:
      return {};
    case RECEIVE_LIKES:
      const likes = {};
      action.likes.forEach((like) => {
        likes[like.video_id] = like;
      });

      return merge({}, state, likes);
    default:
      return state;
  }
};

export default likesReducer;
