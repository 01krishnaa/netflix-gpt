import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";

const VideoBackground = ({ id }) => {
  const [key, setKey] = useState();
  const trailers = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const clips = resp.data.results;
    const trailers = clips.filter((clip) => clip.type == "Trailer");
    const trailer = trailers[0];
    const trailerKey = trailer.key;
    console.log(trailerKey);
    setKey(trailerKey);
  };

  useEffect(() => {
    trailers();
  }, []);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?si=QIs0DBDhindv_RVh?&mute=1&autoplay=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
