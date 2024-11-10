import { useState, useEffect } from 'react';
import { getTrend } from '../API';
import { PageTitle } from 'components/PageTitle/PageTitle';
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { MovieCardsList } from 'components/MovieCardsList/MovieCardsList';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchTrendsMovies() {
      try {
        setIsLoading(true);
        const trends = await getTrend();
        setTrendMovies([...trends.data.results]);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrendsMovies();
  }, []);

  return (
    <div>
      <PageTitle title="Today trending Movies" />
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
      {trendMovies && (
        <MovieCardsList>
          {trendMovies.map(movie => {
            const { id, poster_path, title, release_date, vote_average } =
              movie;
            return (
              <MovieCard
                id={id}
                release_date={release_date}
                poster_path={poster_path}
                title={title}
                vote_average={vote_average}
              />
            );
          })}
        </MovieCardsList>
      )}
    </div>
  );
}
