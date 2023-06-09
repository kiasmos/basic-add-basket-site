import { useContext } from "react";
import ContentApi from "../components/ContentApi";
import ProItems from "./ProItems";

export default function Home() {
  const { products } = useContext(ContentApi);

  // console.log("Home rendered");

  // const productList = Array.isArray(products) ? products : [];

  return (
    <div className="main">
      {products && products.map((e) => <ProItems key={e.id} products={e} />)}
    </div>
  );
}
