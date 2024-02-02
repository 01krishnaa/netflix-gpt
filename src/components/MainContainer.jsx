import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const allTrailerInfo = useSelector(
    (appstore) => appstore?.movie?.nowPLayingMovies
  );
  if (!allTrailerInfo) return;
  const mainMovie = allTrailerInfo[0];
  console.log(mainMovie);

  const { id, title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
