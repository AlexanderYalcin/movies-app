const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_BASE_URL;

export const getTrendingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getNowPlayingMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const getMoviesByQuery = async (query: string) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await res.json();
  return data.results;
};