import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { getPopularMovies } from "../service/movies";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies()
      .then((res) => res.json())
      .then((data) => {
        dispatch(addPopularMovies(data.results));
      });
  }, []);
};

export default usePopularMovies;
