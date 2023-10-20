import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { getNowplayingMovies } from "../service/movies";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowplayingMovies()
      .then((res) => res.json())
      .then((data) => {
        dispatch(addMovies(data.results));
      });
  }, []);
};

export default useNowplayingMovies;
