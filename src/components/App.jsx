import HomePage from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage';
import { Toaster } from 'react-hot-toast';
import { NavLink, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">All movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>reviews</div>} />
        </Route>
      </Routes>

      <Toaster />
      <GlobalStyle />
    </div>
  );
};
