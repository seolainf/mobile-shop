import React from "react";
import "./home.scss";

import Header from "../../components/Header/Header";
import productsData, {
  mobileTrademark,
  laptopTrademark,
} from "../../data/product";
import ProductHeading from "../../components/ProductHeading/ProductHeading";
import ProductCard from "../../components/ProductCard/ProductCard";
import Grid from "../../components/Grid/Grid";

const Home = () => {
  const product = productsData.getMobileProducts(5);

  return (
    <>
      <Header />
      <div className="home">
        <ProductHeading trademarks={mobileTrademark} />
        <Grid col={5} mdCol={3} smCol={2} gap={32}>
          <ProductCard product={product} />
        </Grid>
        <ProductHeading trademarks={laptopTrademark} />
      </div>
    </>
  );
};

export default Home;
