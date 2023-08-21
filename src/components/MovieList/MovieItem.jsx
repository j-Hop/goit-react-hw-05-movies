import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { getPoster } from 'services/getImage';
import { Image, StyledLink, StyledMovieItem, Title } from './MovieList.styled';

export const MovieItem = ({ id, title, name, poster_path }) => {
  const location = useLocation();
  const src = getPoster(poster_path);

  return (
    <StyledMovieItem key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <Image src={src} alt={title || name} />
        <Title>{title || name}</Title>
      </StyledLink>
    </StyledMovieItem>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
};