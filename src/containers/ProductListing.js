import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent.js";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions.js";

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);

  return (
    <div className="ui grid container" style={{ marginTop: "10px" }}>
      <ProductComponent />
    </div>
  );
}
