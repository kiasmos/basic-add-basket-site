import productimage from "../assets/Frame 28.png";
import { Link } from "react-router-dom";

export default function Home({ products }) {
  console.log(products);

  const productList = Array.isArray(products) ? products : [];

  return (
    <div className="main">
      {productList.map((e) => (
        <div className="container" key={e.id}>
          <div className="card">
            <img src={productimage} alt="prod" />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-price">{e.price} AZN</p>
              <Link to="">ADD TO CART</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
