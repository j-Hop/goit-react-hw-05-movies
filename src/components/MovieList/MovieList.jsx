import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';
import { StyledMovieList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(movie => {
        return (
          <MovieItem
            key={movie.id}
            id={movie.id}
            title={movie.title}
            name={movie.name}
            poster_path={movie.poster_path}
          />
        );
      })}
    </StyledMovieList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};