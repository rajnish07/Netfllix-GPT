import React, { useRef } from "react";
import openai from "../service/openAI";

const GPTSearchBar = (props) => {
  const searchText = useRef(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const results = openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
  };

  return (
    <div className="pt-[14%] flex justify-center">
      <form className="bg-black w-1/2 box-border">
        <input
          type="text"
          className="p-4 m-4 w-4/5 outline-none text-black"
          placeholder="What would you like to watch today?"
          ref={searchText}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
