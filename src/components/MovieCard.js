import React from "react";
import { IMAGECDNURL } from "../utils/contants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-80">
      <img
        src={`${IMAGECDNURL}${movie.poster_path}`}
        alt="movie-card"
        className="w-full aspect-video"
      />
    </div>
  );
};

export default MovieCard;
