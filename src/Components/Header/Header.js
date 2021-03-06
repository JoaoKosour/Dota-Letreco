import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">Home</Link>
      <Link to="/Dotreko">Dotreko</Link>
      <Link to="/Letrekomon">Letrekomon</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
}

export default Header;
