import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css"; // CSS import edildi

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>🔥 Trending Movies</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
