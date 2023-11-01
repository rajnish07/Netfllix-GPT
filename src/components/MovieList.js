import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="p-6">
      <h1 className="text-4xl p-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movieList &&
            movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

//https://image.tmdb.org/t/p/w780/mOX5O6JjCUWtlYp5D8wajuQRVgy.jpg
