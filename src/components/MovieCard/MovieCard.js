import { Link } from 'react-router-dom';
import {
  MovieCardContent,
  MovieCardDetailes,
  MovieCardDetailesText,
  MovieCardDetailesTitle,
  MovieCardHeader,
  MovieCardInfo,
  MovieCardItem,
  MovieCardTitle,
} from './MovieCard.styled';

export const MovieCard = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
}) => {
  const posterLink =
    'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + poster_path;
  return (
    <MovieCardItem key={id}>
      <MovieCardHeader>
        <img src={posterLink} alt={title} />
      </MovieCardHeader>
      <MovieCardContent>
        <MovieCardInfo>
          <Link to={`/movies/${id}`}>
            <MovieCardTitle>{title}</MovieCardTitle>
          </Link>
        </MovieCardInfo>
        <MovieCardInfo style={{ marginTop: '1em' }}>
          <MovieCardDetailes>
            <MovieCardDetailesTitle>Realese Date</MovieCardDetailesTitle>
            <MovieCardDetailesText>{release_date}</MovieCardDetailesText>
          </MovieCardDetailes>
          <MovieCardDetailes>
            <MovieCardDetailesTitle>Rating</MovieCardDetailesTitle>
            <MovieCardDetailesText>{vote_average}</MovieCardDetailesText>
          </MovieCardDetailes>
        </MovieCardInfo>
      </MovieCardContent>
    </MovieCardItem>
  );
};
