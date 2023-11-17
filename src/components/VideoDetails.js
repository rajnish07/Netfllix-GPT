import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGPTSearchView } from "../utils/gptSlice";

const VideoDetails = ({ movie }) => {
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    showGPTSearch && dispatch(toggleGPTSearchView());
  }, []);

  return (
    <div className="relative w-full text-white md:-mt-60 z-50 px-8 md:px-36">
      <h3 className="font-bold">Genres:</h3>
      {movie?.genres.map((gn, id) => (
        <span key={id}>
          {`${gn.name}${id === movie.genres.length - 1 ? "" : ","}`}{" "}
        </span>
      ))}
      <h3 className="font-bold mt-6">Overview</h3>
      <p className="text-xs md:text-lg w-full smd:w-3/4">{movie?.overview}</p>
    </div>
  );
};

export default VideoDetails;
