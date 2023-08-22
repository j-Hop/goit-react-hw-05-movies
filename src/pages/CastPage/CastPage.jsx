import CastList from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchMoviesDetalis } from 'service/api';

const Cast = () => {
  const { movieId } = useParams();
  const apiCredits = `/movie/${movieId}/credits`;

  // const apiDataMovie = `/movie/${movieId}`;
  const [movieCredits, setMovieCredits] = useState(null);

  const [errorMes, setError] = useState(null);
  // const [page, setPage] = 1;

  useEffect(() => {
    if (!movieId) return;
    const dataMovies = async () => {
      try {
        const data = await onFetchMoviesDetalis(apiCredits);
        const { cast } = data;
        setMovieCredits(cast);
      } catch (error) {
        setError(error.message);
        alert('ERROR:', errorMes);
      }
    };
    dataMovies();
  }, [movieId, apiCredits, errorMes]);
  return (
    <div>
      {movieCredits === null ? (
        <div>
          <p>There is no information about the actors</p>
        </div>
      ) : (
        <CastList cast={movieCredits} />
      )}
    </div>
  );
};

export default Cast;