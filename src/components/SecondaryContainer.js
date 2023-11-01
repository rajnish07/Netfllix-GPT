import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = (props) => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="text-white bg-black">
      <div className="-mt-60 relative z-50 ">
        <MovieList title={"Now Playing"} movieList={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movieList={movies.popularMovies} />
        <MovieList title={"Trending"} movieList={movies.nowPlayingMovies} />
        <MovieList title={"For You"} movieList={movies.nowPlayingMovies} />
        <MovieList title={"You May Like"} movieList={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
