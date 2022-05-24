import React from "react";
import "./company.scss";

const Company = ({ data }) => {
  return (
    <div className="company">
      {data.map((item, index) => (
        <div className="company__item" key={index}>
          <img src={item} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Company;
