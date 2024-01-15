/* eslint-disable no-unused-vars */ // Disable eslint warnings for unused variables
/* eslint-disable react/prop-types */ // Disable eslint warnings for prop-types

import axios from "axios";
import { useState, useContext } from "react";

import TrashIcon from "../Icons/TrashIcon";
import LikeIcon from "../Icons/LikeIcon";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../App";

export default function ProductCard({
  product,
  onDelete,
  showDelete,
  showFavorite = true,
  setFavorite,
  favorite,
}) {
  const nav = useNavigate();

  const { setProductsLength, productsLength } = useContext(ProductsContext);

  const handleDelete = async () => {
    setProductsLength(productsLength - 1);
    onDelete(product.cartProductId);

    try {
      await axios.delete(`https://fakestoreapi.com/products/${product.id}`);
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleFavoriteClick = () => {
    let newFavors;
    if (
      favorite &&
      favorite.filter((favor) => favor.id === product.id).length > 0
    ) {
      newFavors = favorite.filter((favor) => favor.id !== product.id);
    } else {
      newFavors = [...favorite, product];
    }
    setFavorite(newFavors);
    localStorage.setItem("favorites", JSON.stringify(newFavors));
  };

  const handleClick = (productId) => {
    nav(`/product/${productId}`);
  };

  return (
    <div className="relative">
      {showFavorite && (
        <div
          className="absolute right-0 top-0 m-[25px] z-50 cursor-pointer"
          onClick={handleFavoriteClick}
        >
          <LikeIcon
            color={
              favorite.filter((favor) => favor.id === product.id).length > 0
                ? "red"
                : "black"
            }
          />
        </div>
      )}
      <div
        id={`product-card-${product.id}`}
        className="flex flex-col justify-center w-[400px] h-[440px] items-center p-4 cursor-pointer rounded-2xl bg-white relative"
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
        onClick={() => handleClick(product.id)}
      >
        <div className="flex">
          {/* Card image */}
          <img
            src={product.image}
            alt={product.title}
            className="h-[200px] bg-gray-300 w-auto "
          />
        </div>
        <div className="flex p-4">
          {/* Info */}
          <div className="info">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-success font-bold">Price: ${product.price}</p>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-gray-500 line-clamp-2 w-[300px]">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      {/* Delete icon */}
      {showDelete && (
        <div
          className="absolute right-0 top-0 m-[25px] cursor-pointer"
          onClick={handleDelete}
        >
          <TrashIcon />
        </div>
      )}
    </div>
  );
}
