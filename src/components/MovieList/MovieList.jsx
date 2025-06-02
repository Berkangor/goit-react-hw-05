import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.listItem}>
          <Link
            to={`/movies/${movie.id}`}
            className={css.link}
            state={location}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.title}
              className={css.poster}
            />
            <p className={css.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
