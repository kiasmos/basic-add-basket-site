import { NavLink } from "react-router-dom";

export default function Navbar() {
  console.log("Navbar rendered");

  return (
    <nav>
      <div className="basic">
        <NavLink activeClassName="active" to="/" exact={true}>
          Home
        </NavLink>
      </div>
      <div className="allitemsbasket">
        <div className="basic">
          <NavLink activeClassName="active" to="/basket" exact={true}>
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
