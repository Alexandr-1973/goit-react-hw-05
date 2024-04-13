const MovieList = ({moviesList}) => {
    console.log(moviesList);
    return (
        <ul>

            {(moviesList && (moviesList.length > 0)) && moviesList.map((movie) => {
                return (
                    <li key={movie.id}>
                        <a href="">{movie.title}</a>
                    </li>
                )
            })}
            
        </ul>
    )
}

export default MovieList;