import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API';
import { ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { ReviewContainer, StyledReviewCardsList } from './Review.styled';

export const MovieReview = () => {
  const [review, setReview] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchReview() {
      try {
        setIsLoading(true);
        const movie = await getReviews(params.movieId);
        setReview(movie.data);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReview();
  }, [params.movieId]);
  console.log(review);

  return (
    <ReviewContainer>
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
      <h2>Reviews</h2>
      {review && (
        <div>
          <StyledReviewCardsList>
            {review.results.map(review => {
              return (
                <ReviewCard
                  key={review.id}
                  author={review.author}
                  url={review.url}
                  content={review.content}
                />
              );
            })}
          </StyledReviewCardsList>
          {review.total_pages > 1 && <button>Load more reviews</button>}
        </div>
      )}
      {/* {review.total_pages > 1 && <button>Download more</button>} */}
    </ReviewContainer>
  );
};
