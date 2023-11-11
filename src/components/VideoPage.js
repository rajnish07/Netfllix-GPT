import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../service/movies";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedMovie, addTrailer } from "../utils/movieSlice";
import MainContainer from "./MainContainer";
import { Header } from "./Header";
import VideoDetails from "./VideoDetails";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.selectedMovie);

  useEffect(() => {
    dispatch(addTrailer(null));
    getMovieById(videoId)
      .then((data) => data.json())
      .then((result) => dispatch(addSelectedMovie(result)));
  }, []);

  return (
    <div>
      <Header />
      {movie && <MainContainer movie={movie} />}
      <VideoDetails movie={movie} />
    </div>
  );
};

export default VideoPage;
