import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjcyZTJlYWNjMDJlNjM1OTViNzE0YmRiMjAxOWVlZiIsIm5iZiI6MTc0ODg1MTg2Ni4yNjcsInN1YiI6IjY4M2Q1YzlhMTQ5M2UyY2YyNTUzODRlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BwVwk0gRm9uvkJuIDTioLT44FtSv7mIJTFDfmCxKcg'
    }
  };

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const fetchMovieByQuery = async (debouncedQuery) => {
  const response = await axios.get(
    `/search/movie?query=${debouncedQuery}&include_adult=false&language=en-US`,
    options
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return response.data.results;
};
