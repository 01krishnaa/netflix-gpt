import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addUpcomingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    const resp = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    dispatch(addUpcomingMovies(resp.data.results));
    console.log(resp.data.results);
  };

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default useUpcomingMovies;
