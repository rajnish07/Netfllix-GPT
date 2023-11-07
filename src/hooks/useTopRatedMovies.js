import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTopRatedMovies } from "../service/movies";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies()
      .then((data) => data.json())
      .then((result) => {
        dispatch(addTopRatedMovies(result.results));
      });
  }, []);
};

export default useTopRatedMovies;
