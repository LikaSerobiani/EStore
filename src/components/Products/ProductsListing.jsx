/* eslint-disable react/prop-types */ // Disable eslint warnings for prop-types

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsListing({ products }) {
  const localFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [favoriteProducts, setFavoriteProducts] = useState(localFavorites);

  if (!Array.isArray(products)) {
    return <p>Error: Invalid data format</p>;
  }

  return (
    <div className="container">
      <div className="flex flex-wrap gap-6 justify-center mb-[50px]">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              setFavorite={setFavoriteProducts}
              favorite={favoriteProducts}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
