import { getMovie } from 'API';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const movie = await getMovie(params.movieId);
        setMovie(movie.data);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [params.movieId]);

  return (
    <main>
      {isLoading === true && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#e74c3c"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      )}
      <BackLink to={backLinkHref.current}>Back to movies</BackLink>
      <MovieDetails movie={movie} />
    </main>
  );
}
