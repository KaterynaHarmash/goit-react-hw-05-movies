import { useState, useEffect } from 'react';
import { getTrend } from '../API';
import { Link } from 'react-router-dom';
import { PageTitle } from 'components/PageTitle/PageTitle';
import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';

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
      <ul>
        {trendMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
