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

export async function getMovieById(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options);
}

export async function searchMovie(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query="${query}"&include_adult=false&language=en-US&page=1`,
    options
  );
}
