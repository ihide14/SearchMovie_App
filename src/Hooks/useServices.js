import axios from "axios"

export function useServices() {

    const API_KEY = "7725876f"

    /* The change to make the url HTTPs*/
    const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`

    const getMovie = (movie) => {
        const request = axios.get(`${API_URL}s=${movie}`)
        return request.then(response => response.data)
    }

    return getMovie
}