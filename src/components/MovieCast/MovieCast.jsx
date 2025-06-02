import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../movie-api";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then((response) => setCast(response))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.castItem}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg"
                }
                alt={actor.name}
                className={css.actorImage}
              />
              <h3 className={css.actorName}>{actor.name}</h3>
              <p className={css.character}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noCast}>
          We don't have any cast information for this movie
        </p>
      )}
    </div>
  );
}