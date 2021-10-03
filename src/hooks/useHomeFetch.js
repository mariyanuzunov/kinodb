import { useEffect, useState } from 'react';
import api from '../api';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export function useHomeFetch() {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        if (!isLoadingMore) {
            return;
        }

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    async function fetchMovies(page, searchTerm = '') {
        try {
            setError(false);
            setLoading(true);

            const movies = await api.fetchMovies(searchTerm, page);

            setState((state) => ({
                ...movies,
                results:
                    page > 1
                        ? [...state.results, ...movies.results]
                        : [...movies.results],
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    }

    return {
        state,
        loading,
        error,
        searchTerm,
        setSearchTerm,
        setIsLoadingMore,
    };
}
