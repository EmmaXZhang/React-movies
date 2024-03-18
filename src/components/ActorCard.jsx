/* eslint-disable react/prop-types */
export default function ActorCard({ cast }) {
  const imageUrl = `https://picsum.photos/200/300?random=${cast}`;

  return (
    <div>
      <img src={imageUrl} alt="actorImg" />
      <h2>{cast}</h2>
    </div>
  );
}
