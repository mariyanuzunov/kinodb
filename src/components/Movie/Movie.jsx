import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../../hooks/useMovieFetch';
import Grid from '../Grid/Grid';
import Spinner from '../Spinner/Spinnder';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import MovieInfo from '../MovieInfo/MovieInfo';
import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
import Actor from '../Actor/Actor';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../api';
import fallbackImage from '../../images/no_image.jpg';

function Movie() {
    const { movieId } = useParams();
    const { movie, loading, error } = useMovieFetch(movieId);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Oops, something went wrong...</div>;
    }

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue}
            />
            <Grid header="Cast">
                {movie.actors.map((x, i) => (
                    <Actor
                        key={i}
                        name={x.name}
                        character={x.character}
                        imageUrl={
                            x.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${x.profile_path}`
                                : fallbackImage
                        }
                    />
                ))}
            </Grid>
        </>
    );
}

export default Movie;
