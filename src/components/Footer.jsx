import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Link to="/blue">Blue</Link> | 
      <Link to="/red">Red</Link> |
      <Link to="/">Home</Link> |
      <Link to="/">Green</Link>
    </footer>
  );
}
