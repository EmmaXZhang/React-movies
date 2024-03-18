/* eslint-disable react/prop-types */
import ActorCard from "../../components/ActorCard";
import { useState, useEffect } from "react";

export default function ActorsListPage({ movies }) {
  const [castSet, setCastSet] = useState(new Set());

  useEffect(() => {
    const updatedSet = new Set();

    movies.map((movie) =>
      movie.cast.forEach((castMember) => {
        updatedSet.add(castMember);
      })
    );

    setCastSet(updatedSet);
  }, [movies]);

  const uniqueCastArray = Array.from(castSet);

  return (
    <>
      <h1>ActorsListPage</h1>
      <ul>
        {uniqueCastArray.map((cast, index) => (
          <ActorCard key={index} cast={cast} />
        ))}
      </ul>
    </>
  );
}
