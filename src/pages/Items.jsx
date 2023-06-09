import { useContext } from "react";
import ContentApi from "../components/ContentApi";
import productimage from "../assets/Frame 28.png";
import { Link } from "react-router-dom";

export default function Items({ products }) {
  console.log(products);

  const { itemAdder } = useContext(ContentApi);

  return (
    <div className="container" key={products.id}>
      <div className="card">
        <img src={productimage} alt="prod" />
        <div className="card-body">
          <h5 className="card-title">{products.title}</h5>
          <p className="card-price">{products.price} AZN</p>
          <button className="btn-grad" onClick={() => itemAdder(products.id)}>
            <Link to="">ADD TO CART</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
