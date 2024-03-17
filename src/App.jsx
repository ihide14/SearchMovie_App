import { useEffect, useState, useRef } from 'react'
import MovieCard from './Components/Movie_card'
import { useLookSearch } from './Hooks/useLookSearch'

function App() {

  const { movies, search, error, lookSearch, verifiedSubmit } = useLookSearch()
  const [sort, setSort] = useState(false)
  const sortedMovies = useRef(null)

  useEffect(() => {

    var sortSelector = document.getElementById("SortBotton")

    if (movies === null) {
      sortSelector.style.display = "none"
    }
    else {

      if (sortedMovies.current !== movies?.Results) {
        setSort(false)
      }
      sortedMovies.current = movies?.Results
      sortSelector.style.display = "block"
    }


  }, [movies])

  function handleSort() {
    setSort(!sort)
  }

  return (
    <>
      <header className='Search'>
        <h1>Movie App Search</h1>
        <form onSubmit={verifiedSubmit}> Enter the movie you want to search for:
          <input style={{
            border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'
          }} onChange={lookSearch} value={search} placeholder='Look a movie....' /> <input type='button' id='SortBotton' style={{
            backgroundColor: sort ? 'green' : ''
          }} value={"Sort By Year"} onClick={handleSort} />
          <button>Search</button>
        </form>
        {error ? (`${error}`) : ("")}
      </header >
      <article className='DirectoryMovies'>
        {movies && movies?.Results?.length > 0 ? (sort ? sortedMovies.current.slice().sort((a, b) => b.Year - a.Year).map(dataMovie => <MovieCard movie={dataMovie} key={dataMovie.imdbID} />) :
          movies?.Results.map(dataMovie => <MovieCard movie={dataMovie} key={dataMovie.imdbID} />)
        ) : ("")}

      </article>
    </>
  )
}

export default App
