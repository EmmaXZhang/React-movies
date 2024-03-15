/* eslint-disable react/prop-types */
import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const cardStyle = {
    backgroundImage: `url(${movie.posterPath})`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="cardInfo">
        <Link to={`/movies/${movie.title}`}>{movie.title}</Link>
        <b>{movie.releaseDate}</b>
      </div>
    </div>
  );
}
