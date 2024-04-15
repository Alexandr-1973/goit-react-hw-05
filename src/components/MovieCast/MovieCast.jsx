import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import creditsMoviesFetch from "../../api/movie-credits";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    async function detailsFetch(id) {
      try {
        const data = await creditsMoviesFetch(id);
        setCredits(data.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    detailsFetch(movieId);
  }, [movieId]);

  return (
    <ul className={css.cards}>
      {credits.map((credit) => {
        return (
          <li key={credit.id} className={css.card}>
            <img
              src={`https://image.tmdb.org/t/p/w500${credit.profile_path}`}
              alt="Actor's photo"
              className={css.img}
            />
            <p>{credit.name}</p>
            <p>Character:</p>
            <p>{credit.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCast;
