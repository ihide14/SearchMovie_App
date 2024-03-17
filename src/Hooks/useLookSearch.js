import { useRef, useState } from "react"
import { useServices } from "./useServices"

export function useLookSearch() {

    const [movies, setMovies] = useState(null)
    const [search, setSearch] = useState("")
    const [error, setError] = useState(null)
    const getMovie = useServices()
    const prevSearch = useRef(null)

    const lookSearch = (event) => {
        event.preventDefault()
        const valueInput = event.target.value

        if (valueInput?.length === 0) {
            setMovies(null)
        }

        if (valueInput.startsWith(" ")) {
            setError("La pelicula no puede iniciar con un espacio")

            setTimeout(() => {
                setError(null)
            }, 5000)

            return null
        }
        setSearch(valueInput)


    }


    const verifiedSubmit = (event) => {
        event.preventDefault()

        if (search === '') {
            setError("Debes ingresar algo.")
            setTimeout(() => {
                setError(null)
            }, 5000)

            return

        }

        if (prevSearch.current === search) {
            setError("No puedes realizar la misma busqueda.")

            setTimeout(() => {
                setError(null)
            }, 5000)

            return
        }

        getMovie(search).then(data => {
            if (data.Response === "False") {
                setError(data.Error)
                setMovies(null)

                setTimeout(() => {
                    setError(null)
                }, 5000)

            }

            else {
                prevSearch.current = search
                const reformedData = {
                    status: data.Response,
                    Results: data.Search,
                    Total: data.totalResults
                }
                setMovies(reformedData)
                setError(null)
            }
        })
    }


    return { movies, search, error, lookSearch, verifiedSubmit }
}