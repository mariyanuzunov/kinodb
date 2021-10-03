import { useState, useEffect, useCallback } from 'react';
import api from '../api';

export function useMovieFetch(movieId) {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchMovieDetails = useCallback(async () => {
        try {
            setLoading(true);
            setError(false);

            const movie = await api.fetchMovie(movieId);
            const credits = await api.fetchCredits(movieId);
            const directors = credits.crew.filter((x) => x.job === 'Director');

            setState({ ...movie, directors, actors: credits.cast });
            setLoading(false);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    }, [movieId]);

    useEffect(() => {
        fetchMovieDetails();
    }, [movieId, fetchMovieDetails]);

    return { movie: state, loading, error };
}
