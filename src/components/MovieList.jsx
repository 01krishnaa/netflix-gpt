import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieData }) => {
  if (!movieData) return null;

  return (
    <>
      <h1 className="py-6 text-3xl font-semibold">{title}</h1>
      <div className="overflow-scroll" style={{ scrollbarWidth: "none" }}>
        <div className="flex">
          {movieData.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
