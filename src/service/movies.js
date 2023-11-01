import { TOKEN } from "../utils/contants";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

export async function getNowplayingMovies() {
  return fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    options
  );
}

export async function getPopularMovies() {
  return fetch("https://api.themoviedb.org/3/movie/popular?page=1", options);
}

export async function getMovieVideo(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
}
