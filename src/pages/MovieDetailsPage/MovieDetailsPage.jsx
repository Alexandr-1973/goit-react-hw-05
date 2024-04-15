import { VscArrowSmallLeft } from "react-icons/vsc";
import { useLocation, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import detailsMoviesFetch from "../../api/movie-details";
import { useState, useEffect } from "react";
import genresWords from "../../utils/util";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);
  const location = useLocation();
  const [backPath] = useState(location.state);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    if (!movieId) return;
    async function detailsFetch(id) {
      try {
        const data = await detailsMoviesFetch(id);
        setDetails(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    detailsFetch(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={backPath ? backPath : "/movies"} className={css.back}>
        <VscArrowSmallLeft />
        Go back
      </Link>

      <div className={css.details}>
        <img
          src={
            details.poster_path
              ? `https://image.tmdb.org/t/p/w500/${details.poster_path}`
              : defaultImg
          }
          alt="poster"
          className={css["details-img"]}
        />

        <div className={css["details-txt"]}>
          <h2>{details.title}</h2>
          <p>User Score: {Math.round(details.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{details.overview}</p>
          <h4>Genres</h4>
          <p>{genresWords(details)}</p>
        </div>
      </div>

      <div className={css.add}>
        <p>Additional information</p>
        <ul className={css["add-txt"]}>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
