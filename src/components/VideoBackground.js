import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie }) => {
  useMovieTrailer(movie.id);
  const trailer = useSelector((store) => store.movies?.trailer);

  return (
    <div className="w-screen relative top-0 md:-top-8 min-h-[25vh] bg-black">
      {trailer && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?controls=0&showinfo=0&start=7&autoplay=1&mute=1&playlist=${trailer?.key}&loop=1`}
          allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; fullscreen;"
          allowFullScreen={true}
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
