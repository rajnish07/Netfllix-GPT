import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = (props) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  return (
    movies && (
      <div className="relative">
        <VideoTitle movie={movies[0]} />
        <VideoBackground movie={movies[0]} />
      </div>
    )
  );
};

export default MainContainer;
