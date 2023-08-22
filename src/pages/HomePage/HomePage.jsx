import ListMovies from 'components/ListMovies/ListMovies';
import { useEffect, useState } from 'react';
import { fetchData } from 'service/api';

const apiTrendDay = '/trending/movie/day';

const HomePage = () => {
  const [trendingToday, setTrendingToday] = useState([]);
  const [errorMes, setError] = useState(null);
  // const [page, setPage] = 1;

  useEffect(() => {
    const dataMovies = async () => {
      try {
        const data = await fetchData(apiTrendDay);
        setTrendingToday(data.results);
      } catch (error) {
        setError(error.message);
        alert('ERROR:', errorMes);
      }
    };
    dataMovies();
  }, [errorMes]);

  return (
    <>
      <h1>Trending Today</h1>
      <ListMovies movies={trendingToday} />
    </>
  );
};
export default HomePage;