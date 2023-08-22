import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { onFetchMoviesDetalis } from 'service/api';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
// import Cast from 'pages/CastPage/CastPage';
// import Reviews from 'pages/ReviewsPage/ReviewsPage';

const Cast = lazy(() => import('pages/CastPage/CastPage'));
const Reviews = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const apiDataMovie = `/movie/${movieId}`;
  const [movieDetails, setMovieDetails] = useState([]);
  const [errorMes, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;

    const dataMovies = async () => {
      try {
        setIsLoading(true);
        const data = await onFetchMoviesDetalis(apiDataMovie);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
        alert('ERROR:', errorMes);
      } finally {
        setIsLoading(false);
      }
    };

    dataMovies();
  }, [apiDataMovie, errorMes, movieId]);

  const {
    poster_path,
    id,
    title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movieDetails;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w400${poster_path}`
    : 'https://dummyimage.com/300x450/99cccc.gifffffff&text=No%20poster!';
  return (
    <section>
      <Link to={backLink.current}>Go back</Link>
      {isLoading && <Loader />}
      {movieDetails && (
        <div key={id} className={css.containerDetails}>
          <div className={css.image}>
            {' '}
            <img src={poster} alt={title} width="360" />
          </div>
          <div>
            <h2>
              {title}({release_date?.slice(0, 4)})
            </h2>
            <h3>Release date: {release_date}</h3>
            <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>
              {genres?.map(genre => {
                return <span key={genre.id}>{genre.name} </span>;
              })}
            </p>
          </div>
        </div>
      )}
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Routes>
      </Suspense>
    </section>
  );
};

export default MovieDetails;