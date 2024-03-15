const MovieCard = ({ movie }) => {

    if (movie === null) return null

    return (
        <div className="MoviCard">
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt="" />
        </div>
    )
}



export default MovieCard