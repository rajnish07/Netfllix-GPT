import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = (props) => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="text-white bg-black">
      <div className="-mt-80 relative z-50 ">
        <MovieList title={"Now Playing"} movieList={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movieList={movies.popularMovies} />
        <MovieList title={"Top Rated"} movieList={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movieList={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
