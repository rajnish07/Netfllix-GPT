import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { getNowplayingMovies } from "../service/movies";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

  useEffect(() => {
    !nowPlaying &&
      getNowplayingMovies()
        .then((res) => res.json())
        .then((data) => {
          dispatch(addMovies(data.results));
        });
  }, []);
};

export default useNowplayingMovies;
