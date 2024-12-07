import {
  ReviewAuthor,
  ReviewContent,
  ReviewLink,
  ReviewStyledCard,
} from './ReviewCard.styled';

export const ReviewCard = ({ id, author, content, url }) => {
  return (
    <ReviewStyledCard>
      <ReviewAuthor>{author}</ReviewAuthor>
      <ReviewContent>
        {content.length > 350 ? (
          <>
            {content.substring(0, 350)}...
            <ReviewLink href={url}>Read the full review</ReviewLink>
          </>
        ) : (
          content
        )}
      </ReviewContent>
    </ReviewStyledCard>
  );
};
