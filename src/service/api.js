import axios from 'axios';

const KEY_API = '45b8ac4dc4bcb28ba01349825b9d5176';
const URL = 'https://api.themoviedb.org/3';
export const fetchData = async apiType => {
  const { data } = await axios.get(
    `${URL}${apiType}?api_key=${KEY_API}&language=en-US`
  );

  return data;
};

export const onFetchMoviesDetalis = async apiType => {
  const { data } = await axios.get(
    `${URL}${apiType}?api_key=${KEY_API}&language=en-US`
  );
  return data;
};

export const fetchSearchMovies = async (
  apiType,
  searchSubmit,
  quantityPage
) => {
  const { data } = await axios.get(
    `${URL}${apiType}?api_key=${KEY_API}&query=${searchSubmit}&page=${quantityPage}&language=en-US`
  );
  return data;
};