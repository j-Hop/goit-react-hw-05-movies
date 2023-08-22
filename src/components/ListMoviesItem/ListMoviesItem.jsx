import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './ListMoviesItem.module.css';

const ListMoviesItem = ({ movie }) => {
  const location = useLocation();

  const { id, poster_path, title } = movie;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w400${poster_path}`
    : 'https://dummyimage.com/300x450/99cccc.gifffffff&text=No%20poster!';
  return (
    <Link
      state={{ from: location }}
      className={css.itemMovie}
      to={`/movies/${id}`}
    >
      <img src={poster} alt={title} width="360" />
      <h4 className={css.title}> {title}</h4>
    </Link>
  );
};
ListMoviesItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default ListMoviesItem;