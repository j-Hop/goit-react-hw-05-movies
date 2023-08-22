import ListMoviesItem from 'components/ListMoviesItem/ListMoviesItem';
import css from './ListMovies.module.css';
import PropTypes from 'prop-types';

const ListMovies = ({ movies }) => {
  return (
    <div>
      <ul className={css.listMovies}>
        {movies.map(movie => {
          return <ListMoviesItem key={movie.id} movie={movie} />;
        })}
      </ul>
    </div>
  );
};
ListMovies.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default ListMovies;