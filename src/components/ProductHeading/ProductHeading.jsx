import React from "react";
import "./productheading.scss";

const ProductHeading = ({ trademarks }) => {
  return (
    <>
      {trademarks.map((trademark, i) => (
        <div className="productheading" key={i}>
          <div className="productheading__title">{trademark.name}</div>
          <div className="productheading__list">
            {trademark.bands.map((item) => (
              <span className="productheading__list-item" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductHeading;
