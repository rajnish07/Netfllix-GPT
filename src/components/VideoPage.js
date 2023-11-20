import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../service/movies";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedMovie, addTrailer } from "../utils/movieSlice";
import MainContainer from "./MainContainer";
import { Header } from "./Header";
import VideoDetails from "./VideoDetails";
import Footer from "./Footer";
import GPTSearch from "./GPTSearch";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.selectedMovie);
  const { showGPTSearch } = useSelector((store) => store.gpt);

  useEffect(() => {
    dispatch(addTrailer(null));
    getMovieById(videoId)
      .then((data) => data.json())
      .then((result) => dispatch(addSelectedMovie(result)));
  }, []);

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        movie && (
          <>
            <MainContainer movie={movie} />
            <VideoDetails movie={movie} />
          </>
        )
      )}
      <Footer />
    </div>
  );
};

export default VideoPage;
