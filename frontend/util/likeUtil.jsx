export const getLikes = (user) => {
  return $.ajax({
    method: "GET",
    url: "api/likes",
    data: {
      user_id: user.id,
    },
  });
};

export const createLike = (like) => {
  return $.ajax({
    method: "POST",
    url: "api/likes",
    data: {
      like,
    },
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${id}`,
  });
};
