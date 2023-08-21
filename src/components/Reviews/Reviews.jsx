import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getReview } from 'services/api';
import {
  ReviewAuthor,
  ReviewContent,
  StyledReviewItem,
  StyledReviewList,
} from './Review.styled';

const Reviews = () => {
  const [movieReview, setMovieReview] = useState({});
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieReview = async id => {
      try {
        setLoading(true);
        const movieReviewData = await getReview(id);
        setMovieReview(movieReviewData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieReview(movieId);
  }, [movieId]);

  return (
    <>
      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}

      {movieReview?.length > 0 ? (
        <StyledReviewList>
          {movieReview.map(review => (
            <StyledReviewItem key={review.id}>
              <ReviewAuthor>Author: {review.author}</ReviewAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </StyledReviewItem>
          ))}
        </StyledReviewList>
      ) : (
        'No reviews'
      )}
    </>
  );
};
export default Reviews;