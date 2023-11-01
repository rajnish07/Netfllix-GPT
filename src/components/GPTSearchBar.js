import React from "react";

const GPTSearchBar = (props) => {
  return (
    <div className="pt-[14%] flex justify-center">
      {" "}
      <form className="bg-black w-1/2 box-border">
        <input
          type="text"
          className="p-4 m-4 w-4/5 outline-none text-black"
          placeholder="What would you like to watch today?"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-md">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
