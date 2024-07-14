import { getMovie } from 'API';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await getMovie(params.movieId);
        setMovie(movie.data);
      } catch (e) {}
    }
    fetchMovie();
  }, [params.movieId]);
  console.log(movie);

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.original_title}</h2>
          <img
            src={
              'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' +
              movie.poster_path
            }
            alt={movie.original_title}
          />
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
}
