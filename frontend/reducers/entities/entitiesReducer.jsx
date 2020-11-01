import usersReducer from "./usersReducer";
import videoReducer from "./videoReducer";
import { combineReducers } from "redux";
import likesReducer from "./likesReducer";
import dislikesReducer from "./dislikesReducer";

const entitiesReducer = combineReducers({
  user: usersReducer,
  videos: videoReducer,
  likes: likesReducer,
  dislikes: dislikesReducer,
});

export default entitiesReducer;
