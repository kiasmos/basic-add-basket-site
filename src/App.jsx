import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import "./style.css";
import { useState, useEffect } from "react";
// import axios from "axios";
import db from "./components/db.json";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Tüm ürünleri almak için db.products'i kullanıyoruz
      setProducts(db.products);
    };
    fetchData();
  }, []);

  // const url =
  //   "https://dummyjson.com/products?limit=10&skip=10&select=title,price";
  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setProducts(response.data);
  //     // console.log(response.data);
  //   });
  // }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home products={db.products} />
        </Route>
        <Route exact path="/basket">
          <Basket />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
