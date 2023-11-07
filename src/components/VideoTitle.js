import React from "react";

const VideoTitle = ({ movie }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-36 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-6xl font-bold">{movie.original_title}</h1>
      <p className="w-1/4">{movie.overview}</p>
      <div className="flex gap-x-2 my-4">
        <button className="text-black w-24 text-xl py-1 rounded-md bg-white hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-600 text-white w-24 py-1 text-md bg-opacity-80 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
