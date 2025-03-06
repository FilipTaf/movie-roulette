import { useSelector } from "react-redux";
export default function Test() {
  const movie = useSelector((state) => state.movies);

  console.log(movie);

  return (
    <div>
      <ul>
        {movie.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
