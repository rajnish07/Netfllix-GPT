import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { getPopularMovies } from "../service/movies";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popular = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    !popular &&
      getPopularMovies()
        .then((res) => res.json())
        .then((data) => {
          dispatch(addPopularMovies(data.results));
        });
  }, []);
};

export default usePopularMovies;
