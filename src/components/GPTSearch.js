import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuuggestions from "./GPTMovieSuuggestions";
import { BACKGROUND } from "../utils/contants";

const GPTSearch = (props) => {
  return (
    <div className="text-white">
      <div className="absolute -z-10">
        <img
          src={BACKGROUND}
          alt="background-img"
          className="aspect-mobile md:aspect-video"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuuggestions />
    </div>
  );
};

export default GPTSearch;
