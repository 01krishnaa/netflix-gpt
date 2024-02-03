import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondraryContainer = () => {
  const nowPLayingMovies = useSelector(
    (appstore) => appstore?.movie?.nowPLayingMovies
  );
  const popularMovies = useSelector(
    (appstore) => appstore?.movie?.popularMovies
  );

  const topRatedMovies = useSelector(
    (appstore) => appstore?.movie?.topRatedMovies
  );

  const upcomingmovies = useSelector(
    (appstore) => appstore?.movie?.upcomingMovies
  );
  return (
    <div className="bg-black text-white -mt-2">
      <div className="ml-16 -mt-60 relative mr-5">
        <MovieList title={"Now Playing"} movieData={nowPLayingMovies} />
        <MovieList title={"Top Rated"} movieData={topRatedMovies} />
        <MovieList title={"Popular"} movieData={popularMovies} />
        <MovieList title={"Upcoming"} movieData={upcomingmovies} />
        <MovieList title={"Trending"} movieData={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondraryContainer;
