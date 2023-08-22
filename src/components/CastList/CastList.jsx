import PropTypes from 'prop-types';
const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => {
        const { id, name, profile_path } = el;
        const poster = profile_path
          ? `https://image.tmdb.org/t/p/w400${profile_path}`
          : 'https://dummyimage.com/200x300/99cccc.gifffffff&text=No%20poster!';

        return (
          <li key={id}>
            {' '}
            <img src={poster} alt={name} width={200} />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;