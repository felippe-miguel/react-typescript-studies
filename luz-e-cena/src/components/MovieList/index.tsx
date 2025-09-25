import styles from "./MovieList.module.css";
import type { MovieCardProps } from "../MovieCard";
import MovieCard from "../MovieCard";

interface MovieListProps {
  movies: MovieCardProps[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <MovieCard key={movie.titulo} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;
