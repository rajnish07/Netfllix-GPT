import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ({ movie }) => {
  return (
    <div className="relative pt-[12%] md:pt-0 bg-black">
      <VideoTitle movie={movie} />
      <VideoBackground movie={movie} />
    </div>
  );
};

export default MainContainer;
