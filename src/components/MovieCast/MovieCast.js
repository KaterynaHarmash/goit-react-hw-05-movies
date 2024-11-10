import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API';
import { MovieCastCard } from 'components/MovieCastCard/MovieCastCard';

export const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const movie = await getCast(params.movieId);
        setCast(movie.data);
      } catch (e) {}
    }
    fetchCast();
  }, [params.movieId]);
  console.log(cast);

  return (
    <div>
      {cast && (
        <div>
          <h2>Cast</h2>
          <ul>
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
          </ul>
        </div>
      )}
    </div>
  );
};
