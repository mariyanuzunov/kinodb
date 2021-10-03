import { Wrapper, Image } from './Actor.styles';

function Actor({ name, character, imageUrl }) {
    return (
        <Wrapper>
            <Image src={imageUrl} alt="actor-thumbnail" />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    );
}

export default Actor;
