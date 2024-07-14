import { useState, useEffect } from 'react';
import { getTrend } from '../API';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendsMovies() {
      try {
        const trends = await getTrend();
        setTrendMovies([...trends.data.results]);
      } catch (e) {}
    }
    fetchTrendsMovies();
  }, []);

  return (
    <div>
      <h2>HomePage</h2>
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
