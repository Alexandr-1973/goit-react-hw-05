import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reviewsMoviesFetch from "../../api/movie-reviews";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    async function detailsFetch(id) {
      try {
        const data = await reviewsMoviesFetch(id);
        setReviews(data.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    detailsFetch(movieId);
  }, [movieId]);

  return (
    <ul className={css.reviews}>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviews;
