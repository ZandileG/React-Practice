import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
//Product Details:
const products = [ 
    { id: 1, name: "Product 1", price: 100, description: "This is product 1" }, 
    { id: 2, name: "Product 2", price: 200, description: "This is product 2" }, 
    { id: 3, name: "Product 3", price: 300, description: "This is product 3" }, 
];

const {id} = useParams();

/*The .find() method is used to search for a specific item in the products array.
 It returns the first item that meets the specified condition or undefined if no match is found.

(p) => p.id === parseInt(id) is a callback function that checks if the id of each product (p.id) matches the value of id from the URL.
 p represents each product object in the products array as .find() iterates over it.
 
 The id retrieved from useParams() is a string because URL parameters are always strings.
 parseInt(id) converts the string into a number, allowing it to correctly compare with p.id, which is a number*/
const product = products.find((p) => p.id === parseInt(id));

if (!product) {
  return <p>Product not found</p>;
}

  return (
    <Fragment>
      <h1>Product</h1>
      <p>Name: {product.name}</p>
      <p>Price: R{product.price}</p>
      <p>Description: {product.description}</p>
    </Fragment>
  );
}

export default ProductDetails;