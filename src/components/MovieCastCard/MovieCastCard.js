import { ActorCard, ActorImage, ActorText } from './MovieCastCard.styled';
import defaultImage from './noun-profile.svg';
export const MovieCastCard = ({ name, character, photo }) => {
  return (
    <ActorCard>
      {photo ? (
        <ActorImage
          src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2' + photo}
          alt={name}
        />
      ) : (
        <ActorImage src={defaultImage} alt={name} />
      )}
      <ActorText>
        <b>Name:</b> {name}
      </ActorText>
      <ActorText>
        <b>Character:</b> {character}
      </ActorText>
    </ActorCard>
  );
};
