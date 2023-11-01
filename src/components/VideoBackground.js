import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie }) => {
  useMovieTrailer(movie.id);
  const trailer = useSelector((store) => store.movies?.trailer);

  return (
    trailer && (
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?controls=0&showinfo=0&start=7&autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen"
          allowFullScreen={true}
        ></iframe>
      </div>
    )
  );
};

export default VideoBackground;
