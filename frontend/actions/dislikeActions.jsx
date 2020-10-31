import * as DisikeAPIUitl from "../util/dislikeUtil";
export const RECEIVE_DISLIKES = "RECEIVE_DISLIKES";
export const RECEIVE_DISLIKE = "RECEIVE_DISLIKE";
export const DELETE_DISLIKE = "DELETE_DISLIKE";
export const CLEAR_DISLIKES = "CLEAR_DISLIKES";

const receiveDislikes = (dislikes) => {
  return {
    type: RECEIVE_DISLIKES,
    dislikes,
  };
};

const receiveDislike = (dislike) => {
  return {
    type: RECEIVE_DISLIKE,
    dislike,
  };
};

const destroyDislike = (dislike) => ({
  type: DELETE_DISLIKE,
  dislike,
});

export const getDislikes = (user) => (dispatch) => {
  return DisikeAPIUitl.getDislikes(user).then((dislikes) =>
    dispatch(receiveDislikes(dislikes))
  );
};

export const createDislike = (dislike) => (dispatch) => {
  return DisikeAPIUitl.createDislike(dislike).then((dislike) =>
    dispatch(receiveDislike(dislike))
  );
};

export const deleteDislike = (id) => (dispatch) => {
  return DisikeAPIUitl.deleteDislike(id).then((dislike) =>
    dispatch(destroyDislike(dislike))
  );
};
