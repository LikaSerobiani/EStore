/* eslint-disable react/prop-types */ // Disable eslint warnings for prop-types

// Importing necessary modules and components
import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Categories from "../components/Categories/Categories";
// Image
import formImage from "../assets/images/user.png";
// Contexts
import { ProductsContext } from "../App";
import { UserContext } from "../App";
// Icons
import SearchIcon from "../components/Icons/SearchIcon";
import UserIcon from "../components/Icons/UserIcon";
import CartIcon from "../components/Icons/CartIcon";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const { productsLength } = useContext(ProductsContext);
  const { userData } = useContext(UserContext);

  const handleSearch = () => {
    navigate(`/products?category=${searchInput}`);
  };

  return (
    <header className="bg-[#fff9f3] p-6 w-full mb-11 ">
      <div className="container ">
        <div className="flex flex-row items-center justify-between py-5 max-[768px]:flex-col gap-6">
          <div className="flex items-center">
            {/* Shop name */}
            <h1 className="text-primary text-xl">
              <Link to="/" className="font-bold max-[768px]:text-2xl">
                E-commerce
              </Link>
            </h1>
          </div>

          {/* Search Input */}
          <div className="flex items-center bg-gray-200 border rounded-[10px] justify-between ">
            <div>
              <input
                type="text"
                placeholder="Search category..."
                className="bg-gray-200 px-2 py-1 rounded focus:outline-none w-[500px] max-[480px]:w-[300px]"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </div>
            {/* Search button */}
            <div>
              <button className="ml-2 px-3 py-1 rounded" onClick={handleSearch}>
                <SearchIcon color="black" />
              </button>
            </div>
          </div>
          {/* Navigation */}
          <nav>
            <ul className="flex gap-[25px] items-center">
              <li>
                <Link to="/products" className="font-medium">
                  Products
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/cart"
                  className="font-medium flex gap-2 items-center"
                >
                  <CartIcon color="black" /> <p>Shopping</p>
                  {productsLength > 0 && (
                    <span className="bg-secondary rounded-full text-white absolute right-[-24px] top-[-10px] w-6 h-6 text-center">
                      {productsLength}
                    </span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  className="font-medium flex gap-2 items-center"
                >
                  {userData?.token || localStorage.getItem("token") ? (
                    <>
                      <img src={formImage} className="w-[30px]" />
                      <p className="font-bold">
                        {userData?.username || localStorage.getItem("username")}
                      </p>
                    </>
                  ) : (
                    <>
                      <UserIcon color="black" className="font-bold" />
                      <p>Log In</p>
                    </>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Categories section */}
        {currentPath.includes("products") && <Categories />}
      </div>
    </header>
  );
};

export default Header;
