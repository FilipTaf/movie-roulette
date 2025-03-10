import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

export default function Cardcontent(props) {
  const movie = useSelector((state) => state.movies);
  return <p>{movie[props.index]["title"]}</p>;
}
