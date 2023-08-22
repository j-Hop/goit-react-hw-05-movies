import Button from 'components/Button/Button';
import ListMovies from 'components/ListMovies/ListMovies';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'service/api';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query') ?? '';

  const apiSearch = '/search/movie';

  const [searchMovie, setSearchMovie] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [quantityPage, setQuantityPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    const searchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSearchMovies(
          apiSearch,
          searchTerm,
          quantityPage
        );
        if (data.total_results === 0) {
          alert('Not a valid request. Please enter a valid value!');
          return;
        }
        setSearchMovie(prevMovie => {
          return [...prevMovie, ...data.results];
        });
        setTotal(data.total_pages);
      } catch (error) {
        setErrorMessage(error.message);
        alert('ERROR:', errorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    searchMovies();
  }, [searchTerm, quantityPage, errorMessage]);

  const handelSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.search.value.toLowerCase().trim();
    if (searchValue === '') {
      alert('Please enter your query in the search field');
      return;
    }
    setSearchParams({ query: searchValue });
    setQuantityPage(1);
    setSearchMovie([]);
    e.target.reset();
  };
  const loadMore = () => {
    setQuantityPage(prevPage => prevPage + 1);
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter the name of the movie..."
          // required
          // minLength={3}
        />
        <button type="submit">Search</button>
      </form>
      {searchMovie.length > 0 && <ListMovies movies={searchMovie} />}
      {isLoading && <Loader />}
      {searchMovie.length > 0 && !isLoading && total !== quantityPage && (
        <Button onClick={loadMore} />
      )}
    </div>
  );
};

export default MoviesPage;