import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="basic">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="allitemsbasket">
        <div className="basic">
          <NavLink exact to="/basket">
            Basket
          </NavLink>
        </div>
        <div className="addbasket">
          <NavLink activeClassName="addbasket" to="/basket">
            1
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
