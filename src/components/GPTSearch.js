import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuuggestions from "./GPTMovieSuuggestions";
import { BACKGROUND } from "../utils/contants";

const GPTSearch = (props) => {
  return (
    <>
      <div className="absolute -z-10 w-full">
        <img
          src={BACKGROUND}
          alt="background-img"
          className="h-screen object-cover w-full"
        />
      </div>
      <div className="text-white pt-[30%] md:pt-0">
        <GPTSearchBar />
        <GPTMovieSuuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
