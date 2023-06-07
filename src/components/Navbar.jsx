import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink exact activeClassName="navbarclass" to="/">
        Home
      </NavLink>
      <NavLink exact activeClassName="navbarclass" to="/basket">
        Add basket
      </NavLink>
    </nav>
  );
}
