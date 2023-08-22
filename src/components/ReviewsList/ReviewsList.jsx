import PropTypes from 'prop-types';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(el => {
        const { id, author, content } = el;
        return (
          <li key={id}>
            {' '}
            <h3>Autor: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};
export default ReviewsList;