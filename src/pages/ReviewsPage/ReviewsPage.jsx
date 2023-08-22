import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchMoviesDetalis } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const apiReviews = `/movie/${movieId}/reviews`;

  const [movieReviews, setMovieReviews] = useState([]);
  const [errorMes, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const dataMovies = async () => {
      try {
        const data = await onFetchMoviesDetalis(apiReviews);
        setMovieReviews(data.results);
      } catch (error) {
        setError(error.message);
        alert('ERROR:', errorMes);
      }
    };
    dataMovies();
  }, [apiReviews, errorMes, movieId]);
  return (
    <div>
      {movieReviews.length > 0 ? (
        <ReviewsList reviews={movieReviews} />
      ) : (
        <div>
          <p>We don`t have any reviews for this movie.</p>
        </div>
      )}
    </div>
  );
};

export default Reviews;