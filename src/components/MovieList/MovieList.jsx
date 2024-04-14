import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const MovieList = ({ moviesList, backPath, queryText }) => {
    console.log(backPath);
    
  // const navigate = useNavigate();
  // const location = useLocation();
  // location.state = backPath;

  //     const handleClick = (id) => {
  //         navigate(`/movies/:${id}`)
  //     }
  // onClick={() => handleClick(movie.id)}
  // state={location}

  return (
    <ul>
      {moviesList &&
        moviesList.length > 0 &&
              moviesList.map((movie) => {
            console.log(movie);
          return (
            <li key={movie.id}>
              {/* <a href="" onClick={() => handleClick(movie.id)}>{movie.title}</a> */}
              <Link to={`/movies/:${movie.id}`} state={{ backPath, queryText }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
