import { Suspense, useEffect, useRef, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { getPoster } from 'services/getImage';
import {
  Container,
  Description,
  DetailsTitle,
  Image,
  InfoContainer,
  MovieTitle,
  NavItem,
  NavLinkStyl,
  NavList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async id => {
      try {
        setLoading(true);
        const movieDetailsData = await getMovieDetails(id);
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <>
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
      <Link to={backLinkLocationRef.current}>GO Back</Link>
      {movieDetails && (
        <Container>
          <Image
            src={getPoster(movieDetails.poster_path)}
            alt={movieDetails.title || movieDetails.name}
          />
          <InfoContainer>
            <div>
              {' '}
              <MovieTitle>{movieDetails.title || movieDetails.name}</MovieTitle>
              <Description>Rating: {movieDetails.vote_average}</Description>
              <DetailsTitle>Overview</DetailsTitle>
              <Description>{movieDetails.overview}</Description>
              <DetailsTitle>Genres</DetailsTitle>
              <Description>
                {movieDetails?.genres?.length > 0 && movieDetails?.genres
                  ? movieDetails.genres.map(genre => genre.name).join(', ')
                  : 'NO Genres'}
              </Description>
            </div>

            <NavList>
              <NavItem>
                <NavLinkStyl to="cast">Cast</NavLinkStyl>
              </NavItem>
              <NavItem>
                <NavLinkStyl to="reviews">Review</NavLinkStyl>
              </NavItem>
            </NavList>
          </InfoContainer>
        </Container>
      )}

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;