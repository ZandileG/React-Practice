import React from "react";
import { useParams, useEffect } from "react-router-dom";

function ProductDetails() {
//Product Details:
const products = [ 
    { id: 1, name: "Product 1", price: 100, description: "This is product 1" }, 
    { id: 2, name: "Product 2", price: 200, description: "This is product 2" }, 
    { id: 3, name: "Product 3", price: 300, description: "This is product 3" }, 
];

const {id} = useParams();

  return (
    <div>
      <h1>This is your product: {id}</h1>
    </div>
  );
}

export default ProductDetails;