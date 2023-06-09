import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentApi from "./components/ContentApi";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import "./style.css";
import { useState, useEffect } from "react";
// import axios from "axios";
import db from "./components/db.json";

export default function App() {
  const [products, setProducts] = useState([]);
  const [basketItem, setBasketItem] = useState([]);

  const fetchData = async () => {
    // Tüm ürünleri almak için db.products'i kullanıyoruz
    setProducts(db.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToBasket = (obj) => {
    setBasketItem((prev) => [...prev, obj]);
    console.log(obj);
  };

  // console.log("app rendered");

  // const url =
  //   "https://dummyjson.com/products?limit=10&skip=10&select=title,price";
  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setProducts(response.data);
  //     // console.log(response.data);
  //   });
  // }, []);

  return (
    <ContentApi.Provider
      value={{
        products,
        setProducts,
        basketItem,
        setBasketItem,
        addToBasket,
      }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/basket">
            <Basket />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </ContentApi.Provider>
  );
}
