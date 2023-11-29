import { useEffect, useState } from "react";
import { moviesApi } from "../api/moviesApi";
import { Cast, CreditsListResponse, Department } from "../types/movies.d";

export const useCasting = (id: number) => {

    const [casting, setCasting] = useState<Cast[]>([]);

    useEffect(() => {

        const fetchCasting = async() => {

            try {

                const resp = await moviesApi.get<CreditsListResponse>(`/movie/${id}/credits`);
                const casting = resp.data.cast.filter(value => value.known_for_department === Department.Acting);

                setCasting(casting);
                
            } catch (error) {

                return error;
                
            }

        };

        fetchCasting();

    }, []);

    return {
        casting
    };

};