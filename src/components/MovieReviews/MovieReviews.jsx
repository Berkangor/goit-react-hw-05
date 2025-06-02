import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../movie-api";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then((response) => setReviews(response))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div className={css.reviewsContainer}>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id} className={css.reviewItem}>
              <h3 className={css.author}>{review.author}</h3>
              <p className={css.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>
          We don't have any reviews for this movie
        </p>
      )}
    </div>
  );
}