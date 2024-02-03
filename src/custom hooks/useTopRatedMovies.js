import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTopRatedMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    dispatch(addTopRatedMovies(resp.data.results));
    // console.log(resp.data.results);
  };

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default useTopRatedMovies;
