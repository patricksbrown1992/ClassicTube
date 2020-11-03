export const getVideos = () => {
  return $.ajax({
    method: "GET",
    url: `api/videos`,
  });
};

export const getVideo = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/videos/${id}`,
  });
};

export const updateVideo = (video) => {
  return $.ajax({
    method: "PATCH",
    url: `api/videos/${video.id}`,
    data: {
      video,
    },
  });
};
