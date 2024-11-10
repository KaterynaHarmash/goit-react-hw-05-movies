import defaultImage from './noun-profile.svg';
export const MovieCastCard = ({ name, character, photo }) => {
  return (
    <li>
      {photo ? (
        <img
          src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + photo}
          alt={name}
        />
      ) : (
        <img src={defaultImage} alt={name} />
      )}
      <h4>Name: {name}</h4>
      <h4>Character: {character}</h4>
    </li>
  );
};
