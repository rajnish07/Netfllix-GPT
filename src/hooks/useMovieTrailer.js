import { useEffect } from "react";
import { getMovieVideo } from "../service/movies";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo(movieId)
      .then((res) => res.json())
      .then((data) => {
        const trailers = data.results.filter(
          (video) => video.type === "Trailer"
        );
        dispatch(addTrailer(trailers[0] || [data.results[0]]));
      });
  }, []);
};

export default useMovieTrailer;
