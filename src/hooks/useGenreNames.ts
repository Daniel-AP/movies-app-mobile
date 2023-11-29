import { useState, useEffect } from "react";
import { moviesApi } from "../api/moviesApi";
import { GenreListResponse } from "../types/movies.d";

export const useGenreNames = (genreIds: number[]) => {

    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {

        const fetchNames = async() => {

            try {

                const resp = await moviesApi.get<GenreListResponse>("/genre/movie/list");
                const names = resp.data.genres.filter(value => genreIds.includes(value.id)).map(value => value.name);

                setNames(names);
                
            } catch (error) {
                
                return error;

            }

        };

        fetchNames();

    }, []);

    return {
        names
    };

};