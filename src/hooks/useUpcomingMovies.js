import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../service/movies";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMovies()
      .then((data) => data.json())
      .then((result) => {
        dispatch(addUpcomingMovies(result.results));
      });
  });
};

export default useUpcomingMovies;
