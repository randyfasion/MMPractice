import React from "react";
import SimpleContainer from '../components/Container'
import ProductList from "../components/Container";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
      <SimpleContainer />
    </div>
  );
};

export default Home;
