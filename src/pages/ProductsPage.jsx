/* eslint-disable react-hooks/exhaustive-deps */ // Disable eslint warnings for exhaustive-deps

// Products page component
import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import ProductsListing from "../components/Products/ProductsListing";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  const categorySearchParams = searchParams.get("category");

  const fetchData = async () => {
    try {
      let response;
      if (categorySearchParams) {
        response = await axios.get(
          `https://fakestoreapi.com/products/category/${categorySearchParams}`
        );
      } else {
        response = await axios.get("https://fakestoreapi.com/products");
      }
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categorySearchParams]);

  return (
    <div>
      <h1 className="font-bold flex justify-center mb-5 text-4xl">Products</h1>
      {products.length === 0 ? (
        <p className="font-bold flex justify-center">Loading...</p>
      ) : (
        <ProductsListing products={products} />
      )}
    </div>
  );
}
