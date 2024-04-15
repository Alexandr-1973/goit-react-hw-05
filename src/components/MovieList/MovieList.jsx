import { Link } from "react-router-dom";

const MovieList = ({ moviesList, backPath }) => {
  return (
    <ul>
      {moviesList &&
        moviesList.length > 0 &&
        moviesList.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={backPath}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
