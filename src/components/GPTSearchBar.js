import React, { useRef } from "react";
import openai from "../service/openAI";
import { useDispatch } from "react-redux";
import { searchMovie } from "../service/movies";
import { addGPTMovies, addSuggestions } from "../utils/gptSlice";

const GPTSearchBar = (props) => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleSearch = async (e) => {
    e.preventDefault();
    const prompt = `Act as a movie recommendation engine and recommmend me 5 movies comma separated based on this as query:${searchText.current.value}. For Example movieName1, movieName2, movieName3, movieName4, movieName5`;
    openai.chat.completions
      .create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      })
      .then((result) => {
        const suggestions = result.choices[0].message.content.split(",");
        dispatch(addSuggestions(suggestions));
        Promise.all(
          suggestions.map((search) =>
            searchMovie(search).then((res) => res.json())
          )
        ).then((data) => {
          dispatch(addGPTMovies(data));
        });
      });
  };

  return (
    <div className="pt-[35%] md:pt-[14%] flex justify-center">
      <form className="bg-black w-full md:w-1/2 box-border">
        <input
          type="text"
          className="p-4 w-4/5 outline-none text-black block md:inline mx-auto my-4 md:m-4"
          placeholder="What would you like to watch today?"
          ref={searchText}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-md block md:inline mx-auto md:mx-0 mb-4 md:mb-0"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
