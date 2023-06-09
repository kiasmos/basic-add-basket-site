import { useContext } from "react";
import productimage from "../assets/Frame 28.png";
import ContentApi from "../components/ContentApi";

export default function Basket() {
  const { basketItem } = useContext(ContentApi);
  console.log(basketItem);
  return (
    <div className="basket-main">
      {basketItem?.map((e) => (
        <div className="basket-card" key={e.id}>
          <img src={productimage} alt="basket-prod" />
          <div className="basket-card-body">
            <h5 className="basket-card-title">{e.title}</h5>
            <p className="basket-card-price"> {e.price} AZN</p>
          </div>
          <div className="item-count">
            <button className="decrease">-</button>
            <div className="count">{basketItem.length}</div>
            <button className="increase">+</button>
          </div>
          <button className="delete">Məhsulu sil</button>
        </div>
      ))}
    </div>
  );
}
