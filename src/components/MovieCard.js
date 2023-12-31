import React from "react";
import { IMAGECDNURL } from "../utils/contants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSelectedMovie, addTrailer } from "../utils/movieSlice";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    movie.poster_path && (
      <div
        className="w-32 md:w-48 cursor-pointer relative h-48 md:h-72"
        onClick={() => {
          dispatch(addTrailer(null));
          dispatch(addSelectedMovie(null));
          navigate(`/browse/${movie.id}`);
        }}
      >
        <img
          src={`${IMAGECDNURL}${movie.poster_path}`}
          alt="movie-card"
          className="w-full absolute"
        />
        <p className="absolute text-white w-full bg-black bottom-0 pl-1 md:pl-2 text-sm md:text-lg bg-opacity-70">
          {movie.title}
        </p>
      </div>
    )
  );
};

export default MovieCard;
