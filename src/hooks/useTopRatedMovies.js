import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopRatedMovies } from "../service/movies";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRatedMovies);
  useEffect(() => {
    !topRated &&
      getTopRatedMovies()
        .then((data) => data.json())
        .then((result) => {
          dispatch(addTopRatedMovies(result.results));
        });
  }, []);
};

export default useTopRatedMovies;
