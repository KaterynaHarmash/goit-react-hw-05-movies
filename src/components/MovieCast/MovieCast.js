import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API';
import { MovieCastCard } from 'components/MovieCastCard/MovieCastCard';
import { CastContainer, MovieCastList } from './MovieCast.styled';
import { ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';

export const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const movie = await getCast(params.movieId);
        setCast(movie.data);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [params.movieId]);

  console.log(cast);

  return (
    <div>
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
      {cast && (
        <CastContainer>
          <h2>Movie cast</h2>
          <MovieCastList>
            {cast.cast.map(actor => {
              return (
                <MovieCastCard
                  key={actor.id}
                  name={actor.name}
                  character={actor.character}
                  photo={actor.profile_path}
                />
              );
            })}
          </MovieCastList>
        </CastContainer>
      )}
    </div>
  );
};
