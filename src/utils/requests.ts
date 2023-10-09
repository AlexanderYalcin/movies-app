const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

export const getTrendingMovies = async () => {
  const res = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getNowPlayingMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getTopRatedMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};

export const getMoviesByQuery = async (query: string) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getMoviesByGenre = async (genre: string) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};
