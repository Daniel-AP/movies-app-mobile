import { useState, useEffect } from "react";
import { Movie, MoviesListResponse } from "../types/movies.d";
import { moviesApi } from "../api/moviesApi";

export const useMovieLists = <T extends string>(list: T[]) => {

    const [results, setResults] = useState<{[K in T]: Movie[]}>({} as {[K in T]: Movie[]});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchMovies = async() => { 

            setLoading(true);

            const promises: Promise<Movie[]>[] = [];

            list.forEach(value => promises.push((async() => {

                try {

                    const resp = await moviesApi.get<MoviesListResponse>(`/movie/${value}`);

                    return resp.data.results;
                    
                } catch (error: any) {

                    return error;

                }

            })()));

            const data = await Promise.all(promises);
            const results: {[K in T]: Movie[]} = {} as {[K in T]: Movie[]};
            
            list.forEach((value, index) => {
                results[value] = data[index];
            });

            setResults(results);
            setLoading(false);

        };

        fetchMovies();

    }, []);

    return {
        movies: results,
        loading
    };

};