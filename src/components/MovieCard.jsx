import React from "react";

const MovieCard = ({ path }) => {
  return (
    <div>
      <div className="w-44 pr-3 ml-2 ">
        <img src={"https://image.tmdb.org/t/p/w500" + path} alt="movieImg" />
      </div>
    </div>
  );
};

export default MovieCard;
