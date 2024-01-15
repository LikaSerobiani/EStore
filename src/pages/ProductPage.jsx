/* eslint-disable react-hooks/exhaustive-deps */ // Disable eslint warnings for exhaustive-deps
/* eslint-disable no-unused-vars */ // Disable eslint warnings for unused variables

// Importing necessary modules and components
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ProductsContext } from "../App";
// icon
import ArrowRight from "../components/Icons/ArrowRight";

const ProductCard = () => {
  const { cardId } = useParams();
  const [cardData, setCardData] = useState(null);
  const [error, setError] = useState(null);
  const { products, setProducts, setProductsLength } =
    useContext(ProductsContext);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${cardId}`
      );
      setCardData(response.data);
    } catch (error) {
      setError(error.message || "An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [cardId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cardData) {
    return <div className="font-bold flex justify-center">Loading...</div>;
  }

  const addProductsToCart = (product) => {
    const updatedProducts = [
      ...products,
      { ...product, quantity: product.quantity || 1, cartProductId: uuidv4() },
    ];
    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);

    setProductsLength((prevCount) => prevCount + 1);
  };

  return (
    <div className="container-xl m-auto flex w-[900px] h-[440px] justify-around items-center cursor-pointer rounded-2xl bg-white relative max-[768px]:w-[700px] max-[480px]:h-[600px] max-[480px]:w-[400px] max-[480px]:flex max-[480px]:flex-col">
      {/* Card image */}
      <div>
        <img
          src={cardData.image}
          alt={cardData.title}
          className="h-auto bg-gray-300 w-[250px] max-[480px]:w-[130px]"
        />
      </div>
      {/* Information */}
      <div className="w-[400px] max-[480px]:w-[300px]  ">
        <div className="info flex gap-3 flex-col max-[480px]:flex max-[480px]:gap-0">
          <h2 className="text-xl font-bold">{cardData.title}</h2>
          <p className="text-success font-bold">Price: ${cardData.price}</p>
          <p className="text-gray-500">{cardData.category}</p>
          <p className="text-gray-500">{cardData.description}</p>
          {/* Cart button*/}
          <div className="flex flex-row items-center gap-1">
            <button
              className="font-bold"
              onClick={() => addProductsToCart(cardData)}
            >
              Add to cart
            </button>
            <ArrowRight color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
