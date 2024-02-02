import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    dispatch(addNowPlayingMovies(resp.data.results));
    console.log(resp.data.results);
  };

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default useNowPlayingMovies;
