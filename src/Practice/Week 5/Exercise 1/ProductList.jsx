/*Exercise 1: 
Build an e-commerce application where each product has a unique ID, and the product details are displayed on a dynamic route.

Requirements:
Create a route /products/:id to display details of a specific product.
Use useParams to extract the product ID from the URL.
Fetch product details from an API or mock data based on the ID.

Hints:
Use useParams to access the product ID.
Use useEffect to fetch product details based on the ID.
Display the product details on the page.
You can use the mock product list, and product details, below.
*/

import React from "react";

function ProductList(){
//Product List:
const products = [ 
  { id: 1, name: "Product 1", price: 100 }, 
  { id: 2, name: "Product 2", price: 200 }, 
  { id: 3, name: "Product 3", price: 300 }, 
];

  return (
    <div>
      
    </div>
  );
}

export default ProductList;