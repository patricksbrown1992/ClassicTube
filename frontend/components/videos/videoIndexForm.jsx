import React, { useState, useEffect } from "react";
import VideoRow from "./videoRowForm";
import NavForm from "../nav/navForm";
const VideoIndexForm = (props) => {
  useEffect(() => {
    props.getVideos();
  }, []);

  const vids = Object.values(props.videos);

  const videos30s = vids.slice(0, 5);
  const videos40s = vids.slice(5, 10);
  const videos50s = vids.slice(10);

  return (
    <div>
      <NavForm />

      <div>
        Videos of the 30s
        <VideoRow vids={videos30s} />
      </div>
      <div>
        Videos of the 40s
        <VideoRow vids={videos40s} />
      </div>
      <div>
        Videos of the 50s
        <VideoRow vids={videos50s} />
      </div>
    </div>
  );
};

export default VideoIndexForm;
