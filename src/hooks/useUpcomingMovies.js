import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpcomingMovies } from "../service/movies";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcoming = useSelector((store) => store.movies.upcomingMovies);
  useEffect(() => {
    !upcoming &&
      getUpcomingMovies()
        .then((data) => data.json())
        .then((result) => {
          dispatch(addUpcomingMovies(result.results));
        });
  });
};

export default useUpcomingMovies;
