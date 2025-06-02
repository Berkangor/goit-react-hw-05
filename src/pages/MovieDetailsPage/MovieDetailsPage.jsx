import css from "./MovieDetailsPage.module.css";
import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { Suspense, useEffect, useRef } from "react";
import { useState } from "react";
import clsx from "clsx";
import { fetchMovieDetails } from "../../movie-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLink = useRef(location.state);

  const setActiveLink = ({ isActive }) =>
    clsx(css.link, isActive && css.isActive);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <>
      <Link to={backLink.current ?? "/movies"} className={css.backLink}>
        Go back
      </Link>

      {movie && (
        <div className={css.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className={css.poster}
          />
          <div className={css.details}>
            <h2 className={css.title}>{movie.title}</h2>
            <p className={css.overview}>{movie.overview}</p>
            <p className={css.info}>Release Date: {movie.release_date}</p>
            <p className={css.info}>Rating: {movie.vote_average}</p>
          </div>
        </div>
      )}
      <ul className={css.links}>
        <li>
          <NavLink to="cast" className={setActiveLink}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={setActiveLink}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}