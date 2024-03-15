import MovieCard from './Components/Movie_card'
import { useLookSearch } from './Hooks/useLookSearch'

function App() {

  const { movies, search, error, lookSearch, verifiedSubmit } = useLookSearch()

  return (
    <>
      <header className='Search'>
        <h1>Movie App Search</h1>
        <form onSubmit={verifiedSubmit}> Enter the movie you want to search for:
          <input style={{
            border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'
          }} onChange={lookSearch} value={search} placeholder='Look a movie....' /> <button>Search</button>
        </form>
        {error ? (`${error}`) : ("")}
      </header >
      <article className='DirectoryMovies'>
        {movies && movies?.Results?.length > 0 ? (movies?.Results.map(dataMovie => <MovieCard movie={dataMovie} key={dataMovie.imdbID} />)) : ("")}
      </article>
    </>
  )
}

export default App
