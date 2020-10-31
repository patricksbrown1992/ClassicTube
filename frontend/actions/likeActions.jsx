import * as LikeAPIUitl from "../util/likeUtil";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const DELETE_LIKE = "DELETE_LIKE";
export const CLEAR_LIKES = "CLEAR_LIKES";

const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes,
  };
};

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like,
  };
};

const destroyLike = (like) => ({
  type: DELETE_LIKE,
  like,
});

export const getLikes = (user) => (dispatch) => {
  return LikeAPIUitl.getLikes(user).then((likes) =>
    dispatch(receiveLikes(likes))
  );
};

export const createLike = (like) => (dispatch) => {
  return LikeAPIUitl.createLike(like).then((like) =>
    dispatch(receiveLike(like))
  );
};

export const deleteLike = (id) => (dispatch) => {
  return LikeAPIUitl.deleteLike(id).then((like) => dispatch(destroyLike(like)));
};
