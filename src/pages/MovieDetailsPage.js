import { getMovie } from 'API';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
    <main>
      <BackLink to={backLinkHref}>Back to movies</BackLink>
      <MovieDetails movie={movie} />
    </main>
  );
}
