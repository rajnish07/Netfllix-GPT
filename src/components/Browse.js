import React from "react";
import { Header } from "./Header";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Footer from "./Footer";

const Browse = (props) => {
  useNowplayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const { showGPTSearch } = useSelector((store) => store.gpt);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="relative">
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        movies && (
          <>
            <MainContainer movie={movies[0]} />
            <SecondaryContainer />
          </>
        )
      )}
      <Footer />
    </div>
  );
};

export default Browse;
