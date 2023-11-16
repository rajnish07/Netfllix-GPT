import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuuggestions = (props) => {
  const { movies, suggestions } = useSelector((store) => store.gpt);
  return (
    movies &&
    suggestions && (
      <div className="bg-black mt-4">
        {movies.map((movie, idx) => (
          <MovieList
            title={suggestions[idx]}
            movieList={movie.results}
            key={suggestions[idx]}
          />
        ))}
      </div>
    )
  );
};

export default GPTMovieSuuggestions;
