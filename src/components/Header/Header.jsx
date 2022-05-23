import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { BsSearch, BsTelephone, BsCartCheck } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" className="header__logo-link">
          <span>Mobile - Shop</span>
          <img src={require("../../assets/images/logo.png")} alt="" />
        </Link>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Bạn cần tìm gì..." />
        <span className="header__search-icon">
          <BsSearch className="header__icon" />
        </span>
      </div>
      <div className="header__options">
        <div className="header__item">
          <BsTelephone className="header__icon" />
          <div className="header__item-title">
            <span>Gọi mua hàng</span>
            <span>1900.2911</span>
          </div>
        </div>
        <div className="header__item">
          <BiMap className="header__icon" />
          <div className="header__item-title">
            <span>Cửa hàng gần bạn</span>
          </div>
        </div>
        <div className="header__item">
          <FaShippingFast className="header__icon" />
          <div className="header__item-title">
            <span>Tra cứu đơn hàng</span>
          </div>
        </div>
        <div className="header__item">
          <BsCartCheck className="header__icon" />
          <div className="header__item-title">
            <span>Giỏ hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
