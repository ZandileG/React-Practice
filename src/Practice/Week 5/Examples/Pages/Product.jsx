import React from "react";
import { useParams } from "react-router-dom";

function Product() {
const {productId} = useParams();

  return (
    <div>
      <h1>Your product is: {productId}</h1>
    </div>
  )
}

export default Product;