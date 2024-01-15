/* eslint-disable no-unused-vars */ // Disable eslint warnings for unused variables

// Importing necessary modules and components
import React, { useContext } from "react";
import { ProductsContext } from "../App";

import ProductCard from "../components/Products/ProductCard";
import Subscribe from "../components/Subscribe";

export default function CartPage() {
  const { products, setProducts } = useContext(ProductsContext);

  const handleDelete = (productId) => {
    const cardElement = document.getElementById(`product-card-${productId}`);

    if (cardElement) {
      cardElement.style.display = "none";
    }

    const updatedProducts = products.filter(
      (product) => product.cartProductId !== productId
    );

    localStorage.removeItem("cartProducts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="flex flex-wrap gap-9 justify-center">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.cartProductId}
            onDelete={handleDelete}
            showDelete={true}
            showFavorite={false}
          />
        ))}
        <Subscribe />
      </div>
    </>
  );
}
