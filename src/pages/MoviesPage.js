import { searchMovies } from 'API';
import { PageTitle } from 'components/PageTitle/PageTitle';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner';
import { MovieCardsList } from 'components/MovieCardsList/MovieCardsList';
import { MovieCard } from 'components/MovieCard/MovieCard';

export default function MoviesPage() {
  // const [q, setQ] = useState('');
  // const [page, setPage] = useState(0);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const page = searchParams.get('page') || 1;
  const [onLoading, setOnLoading] = useState(false);
  const [loadbtnClickableStatus, setLoadbtnClickableStatus] = useState(true);

  useEffect(() => {
    setMovies([]);
  }, []);

  useEffect(() => {
    if (q === '') return;
    setMovies([]);

    const fetchMovies = async () => {
      setLoadbtnClickableStatus(true);
      setOnLoading(true);
      try {
        const moviesResponse = await searchMovies(q, page);
        if (page >= moviesResponse.data.total_pages) {
          toast.success('We loaded all movies for this theme!');
          setLoadbtnClickableStatus(false);
        }
        setMovies(prevMovies => [
          ...prevMovies,
          ...moviesResponse.data.results,
        ]);
      } catch (error) {
        toast.error(error.message);
        setLoadbtnClickableStatus(false);
      } finally {
        setOnLoading(false);
      }
    };

    if (q !== '' || page !== 0) {
      fetchMovies();
    }
    return () => {
      setMovies([]);
    };
  }, [q, page]);

  const onLoadMore = async () => {
    setSearchParams({ q: `${q}`, page: Number(page) + 1 });
  };

  const onSubmit = async val => {
    if (val !== '') {
      setMovies([]);
      setSearchParams({ q: `${val}`, page: '1' });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <PageTitle title="Movies" />
      <SearchBar onSubmit={onSubmit} />
      {movies && (
        <MovieCardsList>
          {movies.map(movie => {
            const { id, poster_path, title, release_date, vote_average } =
              movie;
            return (
              <MovieCard
                key={id}
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
