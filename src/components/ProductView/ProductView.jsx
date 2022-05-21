import React, { useState } from "react";

import Select from "react-select";
import { BiGift } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import NumberFormat from "react-number-format";

import "./productview.scss";
import Header from "../Header/Header";

const ProductView = ({ product }) => {
  const [image, setImage] = useState(product.img[0]);

  return (
    <div>
      <Header />
      <div className="productView" key={product.id}>
        <div className="productView__heading">{product.name}</div>
        <div className="productView__container">
          <div className="productView__detail">
            <div className="productView__detail-main">
              <img src={image} alt="" />
            </div>
            <div className="productView__detail-list">
              {product.img.map((img, index) => (
                <div
                  className="productView__detail-img"
                  key={index}
                  onClick={() => setImage(img)}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="productView__full">
            <div className="productView__percen">Trả góp 0%</div>
            <div className="productView__price">
              <span className="productView__price-curren">
                <NumberFormat
                  value={product.options[0].price}
                  displayType="text"
                  thousandSeparator={true}
                  suffix="₫"
                />
              </span>
              <span className="productView__price-old">
                <NumberFormat
                  value={product.options[0].oldPrice}
                  displayType="text"
                  thousandSeparator={true}
                  suffix="₫"
                />
              </span>
            </div>
            <div className="productView__options">
              <div className="productView__options_items">
                {product.options.map((memo, i) => (
                  <div className="productView__select" key={i}>
                    <strong>{memo.memories}</strong>
                    <NumberFormat
                      value={memo.price}
                      displayType="text"
                      thousandSeparator={true}
                      suffix="₫"
                    />
                  </div>
                ))}
              </div>
              <div className="productView__options-title">
                <span>Chọn màu để xem giá và chi nhánh có hàng</span>
              </div>
              <div className="productView__options_items">
                {product.colors.map((color, i) => (
                  <div className="productView__select" key={i}>
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>
            {product.bonus.length - 1 === 0 ? (
              <></>
            ) : (
              <div className="productView__romote">
                <div className="productView__romote-title">
                  <BiGift className="productView__romote-icon" />
                  Khuyến mãi
                </div>
                {product.bonus.map((bonus, i) => (
                  <div className="productView__romote-list" key={i}>
                    <span>{i + 1}</span>
                    <span>{bonus} (Xem chi tiết)</span>
                  </div>
                ))}
                {product.hotsale.length - 1 === 0 ? (
                  <></>
                ) : (
                  <div className="productView__romote-hotsale">
                    {product.hotsale}
                  </div>
                )}
              </div>
            )}

            <div className="productView__buttons">
              <button>Mua ngay</button>
            </div>
            <div className="productView__preferential">
              <h4 className="productView__preferential-title">Ưu đãi thêm</h4>
              <div className="productView__preferential-list">
                {product.preferential.map((pref, i) => (
                  <div key={i} className="productView__preferential-item">
                    <BsCheckCircleFill className="productView__preferential-icon" />
                    {pref}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="productView__cities">
            <div className="select-container">
              <Select options={product.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
