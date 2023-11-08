import React from "react";

const VideoTitle = ({ movie }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-8 md:px-36 absolute text-white md:bg-gradient-to-r from-black z-10">
      <h1 className="hidden md:block text-6xl font-bold">
        {movie.original_title}
      </h1>
      <p className="hidden md:block w-1/4">{movie.overview}</p>
      <div className="flex flex-col md:flex-row gap-y-2 md:gap-y-0 md:gap-x-2 mt-16 md:my-4">
        <button className="text-black w-20 md:w-24 text-md md:text-xl py-1 rounded-md bg-white hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-white w-20 md:w-24 py-1 text-sm md:text-md bg-opacity-80 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
