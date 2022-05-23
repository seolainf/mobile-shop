import React from "react";
import ProductView from "../../components/ProductView/ProductView";
import "./view.scss";
import productsData from "../../data/product";
import { useParams } from "react-router-dom";

const View = (props) => {
  const allProducts = productsData.getAllProducts();
  const { slug } = useParams();

  const item = allProducts.find((item) => item.slug === slug);

  return (
    <div className="view">
      <ProductView product={item} />
    </div>
  );
};

export default View;
