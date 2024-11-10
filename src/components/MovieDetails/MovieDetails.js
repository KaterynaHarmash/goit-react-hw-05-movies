import { PageTitle } from '../PageTitle/PageTitle';
import { NavLink, Outlet } from 'react-router-dom';
import { MovieContainer } from './MovieDetails.styled';
import { MovieTextContainer } from './MovieDetails.styled';
export const MovieDetails = ({ movie }) => {
  return (
    <div>
      {movie && (
        <div>
          <MovieContainer>
            <img
              src={
                'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' +
                movie.poster_path
              }
              alt={movie.title}
            />
            <MovieTextContainer>
              <PageTitle
                title={
                  movie.title + ' (' + movie.release_date.substr(0, 4) + ')'
                }
              />
              <p>
                <b>User Score:</b> {movie.vote_average.toFixed(2)}
              </p>
              <p>
                <b>Overview:</b> {movie.overview}
              </p>
              <p>
                <b>Genres:</b>{' '}
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
              <ul>
                <li>
                  <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                  <NavLink to="reviews">Reviews</NavLink>
                </li>
              </ul>
            </MovieTextContainer>
          </MovieContainer>
          <Outlet />
        </div>
      )}
    </div>
  );
};
