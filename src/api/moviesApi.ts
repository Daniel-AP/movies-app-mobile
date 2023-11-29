import { REACT_APP_API_KEY } from "@env";
import axios from "axios";

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        // eslint-disable-next-line camelcase
        api_key: REACT_APP_API_KEY,
        language: "en-US"
    }
});