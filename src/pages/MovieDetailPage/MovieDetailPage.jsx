/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  //catch movie name from url movies/:movieName
  const { movieName } = useParams();

  //find movie
  const selectedMovie = movies.find((movie) => movie.name === movieName);

  return (
    <>
      <h1>MovieDetailPage</h1>
      {selectedMovie ? (
        <div>
          <h2>{selectedMovie.title}</h2>
          <h2>{selectedMovie.releaseDate}</h2>
          <img src={selectedMovie.posterPath} alt="moviePoster" />
          <p>{selectedMovie.cast.joint(",")}</p>
        </div>
      ) : (
        <p> Movie not found</p>
      )}
    </>
  );
}
