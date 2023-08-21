import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '6da8758eb40e221013709d63079fd9c4';

const getTrandingMovies = async () => {
  const response = await axios.get(`${URL}trending/all/day?api_key=${API_KEY}`);
  console.log(response.data.results);
  return response.data.results;
};

const getMovies = async query => {
  const response = await axios.get(
    `${URL}search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};

const getMovieDetails = async movieId => {
  const response = await axios.get(`${URL}movie/${movieId}?api_key=${API_KEY}`);

  return response.data;
};

const getCastDetails = async movieId => {
  const response = await axios.get(
    `${URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return response.data.cast;
};

const getReview = async movieId => {
  const response = await axios.get(
    `${URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  console.log('review', response.data.results);
  return response.data.results;
};

export {
  getTrandingMovies,
  getMovies,
  getMovieDetails,
  getCastDetails,
  getReview,
};