import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <BrowseHeader />
    </>
  );
};

export default Browse;
