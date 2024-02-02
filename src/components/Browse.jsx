import useNowPlayingMovies from "../custom hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondraryContainer from "./SecondraryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <BrowseHeader />
      <MainContainer />
      <SecondraryContainer />
    </>
  );
};

export default Browse;
