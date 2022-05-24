import React from "react";
import NumberFormat from "react-number-format";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./productcard.scss";

const ProductCard = ({ product }) => {
  //console.log(product);
  return (
    <>
      {product.map((item) => (
        <Link to={`/product/${item.slug}`} className="link" key={item.id}>
          <div className="productCard">
            <div className="productCard__img">
              <img src={item.img[0]} alt="" />
            </div>
            <div className="productCard__info">
              <div className="productCard__title">{item.name}</div>
              <div className="productCard__price">
                <span className="productCard__price-curren">
                  <NumberFormat
                    value={item.options[0].price}
                    displayType="text"
                    thousandSeparator={true}
                    suffix="₫"
                  />
                </span>
                {item.options[0].oldPrice === 0 ? (
                  <></>
                ) : (
                  <span className="productCard__price-old">
                    <NumberFormat
                      value={item.options[0].oldPrice}
                      displayType="text"
                      thousandSeparator={true}
                      suffix="₫"
                    />
                  </span>
                )}
              </div>
              <div className="productCard__hotsale">{item.bonus[0]}</div>
              <div className="productCard__rating">
                <div className="productCard__rating-star">
                  <AiFillStar className="productCard__icon" />
                  <AiFillStar className="productCard__icon" />
                  <AiFillStar className="productCard__icon" />
                  <AiFillStar className="productCard__icon" />
                  <AiFillStar className="productCard__icon" />
                </div>
                <div className="productCard__rating-count">
                  <span>10 đánh giá</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
