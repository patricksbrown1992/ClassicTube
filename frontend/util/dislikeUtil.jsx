export const getDislikes = (user) => {
  return $.ajax({
    method: "GET",
    url: "api/dislikes",
    data: {
      user_id: user.id,
    },
  });
};

export const createDislike = (dislike) => {
  return $.ajax({
    method: "POST",
    url: "api/dislikes",
    data: {
      dislike,
    },
  });
};

export const deleteDislike = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/dislikes/${id}`,
  });
};
