/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import UserPage from "./pages/UserPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import Header from "./layout/Header";
import ProductPage from "./pages/ProductPage";
import Footer from "./layout/Footer";
import { createContext } from "react";

export const ProductsContext = createContext(null);
export const UserContext = createContext(null);

export default function App({ loggedIn }) {
  const storedProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const [products, setProducts] = useState(storedProducts);
  const [productsLength, setProductsLength] = useState(products.length);

  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <ProductsContext.Provider
        value={{ products, setProducts, productsLength, setProductsLength }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:cardId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
          <Footer />
        </Router>
      </ProductsContext.Provider>
    </UserContext.Provider>
  );
}
