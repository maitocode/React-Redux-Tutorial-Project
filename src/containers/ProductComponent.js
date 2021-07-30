import React from "react";
import { useSelector } from "react-redux";

export default function ProductComponent() {
  const product = useSelector((state) => state.allProducts.products);

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image"></div>
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
