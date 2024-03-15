/* eslint-disable react/prop-types */
import MovieCard from "../../components/MovieCard";

export default function MoviesListPage({ movies }) {
  return (
    <>
      <h1>MoviesListPage</h1>

      {movies.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </>
  );
}
