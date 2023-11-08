import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = (props) => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  return (
    <div className="text-white bg-black">
      <div className="md:-mt-80 relative z-50 ">
        <MovieList title={"Now Playing"} movieList={nowPlayingMovies} />
        <MovieList title={"Popular"} movieList={popularMovies} />
        <MovieList title={"Top Rated"} movieList={topRatedMovies} />
        <MovieList title={"Upcoming"} movieList={upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
