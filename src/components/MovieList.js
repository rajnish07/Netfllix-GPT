import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="px-1 md:p-6">
      <h1 className="text-lg md:text-4xl p-1 md:p-6 font-600 md:font-normal">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-1 md:gap-4">
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
