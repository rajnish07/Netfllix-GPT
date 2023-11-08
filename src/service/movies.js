const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
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

export async function getTopRatedMovies() {
  return fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", options);
}

export async function getUpcomingMovies() {
  return fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", options);
}

export async function getMovieVideo(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
}
