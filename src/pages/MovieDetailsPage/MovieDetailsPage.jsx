import { VscArrowSmallLeft } from "react-icons/vsc";
import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import detailsMoviesFetch from "../../api/movie-details";
import { useState, useEffect } from "react";
import genresWords from "../../utils/util";
// import MovieGen from "../../components/MovieGen/MovieGen";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    // const [id, setId] = useState()

    const [details, setDetails] = useState([]);
     
    
    const location = useLocation();
    
    // console.log(useParams().movieId);
    console.log(movieId);


    useEffect(() => {
    // const { movieId } = useParams();
        if (!movieId) return;
        console.log(movieId);
        // setId(movieId)
      async function detailsFetch (id) {
      console.log(movieId);
      try {
          const data = await detailsMoviesFetch(id);
        //   console.log(data);
          setDetails(data.data);
        //   const { title, vote_average, overview, genres } = details;
       
      } catch (error) {
        console.log(error);
      }
    }

    detailsFetch(movieId);


}, [movieId]);

    // let { title, vote_average, overview, genres } = details;
    // console.log(title, vote_average, overview, genres );
    
    console.log(details);
    // console.log(details.title);

  return (
    <>
      <Link
        to={location.state.backPath ? location.state.backPath : "/movies"}
        state={location.state.queryText}
      >
        <VscArrowSmallLeft />
        Go back
          </Link>

<div>
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path
}`}
 alt="" />
              <h2>{details.title}</h2>
              <p>{ Math.round(details.vote_average*10)}%</p>
        <h3>Overview</h3>
              <p>{details.overview}</p>
              <h4>Genres</h4>
        <p>{ genresWords(details)}</p>
                      </div>

          {/* <MovieGen details={details} /> */}
          
                      <Outlet />
      {/* <div>
        <p>Additional information</p>
        <a href="">Cast</a>
        <a href="">Reviews</a>
                      </div> */}
                    
    
    </>
  );
};

export default MovieDetailsPage;
