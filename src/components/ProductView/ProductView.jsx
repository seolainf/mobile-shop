import React, { useEffect, useState } from "react";

/* import Select from "react-select"; */
import { BiGift } from "react-icons/bi";
import { BsCheckCircleFill, BsPhone } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import NumberFormat from "react-number-format";

import "./productview.scss";
import Header from "../Header/Header";

const ProductView = ({ product }) => {
  const [image, setImage] = useState(product.img[0]);
  const [memory, setMemory] = useState(product.options[0]);
  const [colors, setColors] = useState(product.colors[0]);
  const [price, setPrice] = useState(product.options[0].price);
  const [oldPrice, setOldPrice] = useState(product.options[0].oldPrice);

  const handleChanges = (item) => {
    setMemory(item);
    setOldPrice(item.oldPrice);
    setPrice(item.price);
  };

  useEffect(() => {
    setImage(product.img[0]);
    setMemory(product.options[0]);
    setColors(product.colors[0]);
    setOldPrice(product.options[0].oldPrice);
    setPrice(product.options[0].price);
  }, [product]);

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
                  value={price}
                  displayType="text"
                  thousandSeparator={true}
                  suffix="₫"
                />
              </span>
              {oldPrice === 0 ? (
                <></>
              ) : (
                <span className="productView__price-old">
                  <NumberFormat
                    value={oldPrice}
                    displayType="text"
                    thousandSeparator={true}
                    suffix="₫"
                  />
                </span>
              )}
            </div>
            <div className="productView__options">
              {product.options[0].memories.length === 0 ? (
                <></>
              ) : (
                <div className="productView__options_items">
                  {product.options.map((memo, i) => (
                    <div
                      className={`productView__select ${
                        memory === memo ? "active" : ""
                      }`}
                      key={i}
                      onClick={() => handleChanges(memo)}
                    >
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
              )}

              {product.colors.length === 0 ? (
                <></>
              ) : (
                <>
                  <div className="productView__options-title">
                    <span>Chọn màu để xem giá và chi nhánh có hàng</span>
                  </div>
                  <div className="productView__options_items">
                    {product.colors.map((color, i) => (
                      <div
                        className={`productView__select ${
                          colors === color ? "active" : ""
                        }`}
                        key={i}
                        onClick={() => setColors(color)}
                      >
                        <span>{color}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
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
                    <span>
                      {bonus} <small>(Xem chi tiết)</small>
                    </span>
                  </div>
                ))}
                {product.hotsale.length === 0 ? (
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
            <div className="productView__cities_title">Thông tin sản phẩm</div>
            <div className="productView__cities_items">
              <BsPhone className="productView__cities_items-icon" />
              <span>Nguyên hộp, đầy đủ phụ kiện từ nhà sản xuất</span>
            </div>
            <div className="productView__cities_items">
              <FaBoxOpen className="productView__cities_items-icon" />
              <span>Máy, Sách hướng dẫn, Cây lấy sim, Cáp Type C</span>
            </div>
            <div className="productView__cities_items">
              <MdOutlineSecurity className="productView__cities_items-icon" />
              <span>
                Bảo hành 12 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1
                trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
