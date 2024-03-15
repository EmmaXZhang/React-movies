/* eslint-disable react/prop-types */
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  const cardStyle = {
    backgroundImage: `url(${movie.posterPath})`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="cardInfo">
        <b>{movie.title}</b>
        <b>{movie.releaseDate}</b>
      </div>
    </div>
  );
}
