import Thumbnail from '../Thumbnail/Thumbnail';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../api';
import fallbackImage from '../../images/no_image.jpg';
import { Wrapper, Content, Text } from './MovieInfo.styles';

function MovieInfo({ movie }) {
    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumbnail
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : fallbackImage
                    }
                    clickable={false}
                ></Thumbnail>

                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>

                    <div className="rating-directors">
                        <div>
                            <h3>Rating</h3>
                            <div className="score">{movie.vote_average}</div>
                        </div>
                        <div className="director">
                            <h3>Directed by</h3>
                            {movie.directors.map((x, i) => (
                                <p key={i}>{x.name}</p>
                            ))}
                        </div>
                    </div>
                </Text>
            </Content>
        </Wrapper>
    );
}

export default MovieInfo;
