import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../../api';
import fallbackImage from '../../images/no_image.jpg';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import Hero from '../Hero/Hero';
import Grid from '../Grid/Grid';
import Thumbnail from '../Thumbnail/Thumbnail';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import { Spinner } from '../Spinner/Spinner.styles';

function Home() {
    const {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore,
    } = useHomeFetch();

    if (error) {
        return <div>Oops, something went wrong...</div>;
    }

    return (
        <>
            {!searchTerm && state.results[0] && (
                <Hero
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            )}
            <SearchBar setSearchTerm={setSearchTerm} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {state.results.map((movie, i) => (
                    <Thumbnail
                        key={i}
                        movieId={movie.id}
                        clickable
                        image={
                            movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : fallbackImage
                        }
                    >
                        {movie.title}
                    </Thumbnail>
                ))}
            </Grid>
            {loading && <Spinner />}

            {state.page < state.total_pages && !loading && (
                <Button text="Load More" cb={() => setIsLoadingMore(true)} />
            )}
        </>
    );
}

export default Home;
