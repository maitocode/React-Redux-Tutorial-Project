import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { selectedProduct } from "../redux/actions/productActions.js";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
}
