import React from 'react';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { MovieList } from 'components/MovieList/MovieList';
import { getTrandingMovies } from 'services/api';
import { HomeContainer, TrendingMovies } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrandingMovies = async () => {
      try {
        setLoading(true);
        const moviesList = await getTrandingMovies();
        setMovies(moviesList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrandingMovies();
  }, []);
  return (
    <HomeContainer>
      <TrendingMovies>Trending movies</TrendingMovies>
      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      <MovieList movies={movies} />
    </HomeContainer>
  );
};

export default Home;