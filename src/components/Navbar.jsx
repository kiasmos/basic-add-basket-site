import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ContentApi from "./ContentApi";

export default function Navbar() {
  // console.log("Navbar rendered");

  const { basketItem } = useContext(ContentApi);

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
            {basketItem.length}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
