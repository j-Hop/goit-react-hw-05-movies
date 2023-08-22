import { Suspense, lazy } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import css from '../pages/HomePage/HomePage.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.headerContainer}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main className={css.mainContainer}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
