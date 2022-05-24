import React, { useState } from "react";
import Company from "../../components/Company/Company";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import Slider from "../../components/Slider/Slider";

import "./products.scss";

const Products = ({ slides, companies, data }) => {
  //console.log(slides);
  //console.log(data);
  //const [products, setProducts] = useState(data);

  return (
    <>
      <Header />
      <div className="products">
        <div className="products__slides">
          <Slider data={slides} />
          <Slider data={slides} />
        </div>
        <Company data={companies} />
        <Grid col={5} mdCol={3} smCol={2} gap={32}>
          <ProductCard product={data} />
        </Grid>
      </div>
    </>
  );
};

export default Products;
