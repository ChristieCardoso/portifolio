import { Link } from "react-router-dom";

import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="NavbarContainer">
      <Link to="/" className="NavLink">Home</Link>
      <Link to="/project" className="NavLink">Projetos</Link>
      <Link to="/about" className="NavLink">Sobre</Link>
    </div>
  )
}
