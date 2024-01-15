/* eslint-disable no-unused-vars */ // Disable eslint warnings for unused variables
/* eslint-disable react/prop-types */ // Disable eslint warnings for prop-types

import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("electronics");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category: category });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row gap-[65px] font-medium justify-center max-[480px]:flex max-[480px]:flex-col max-[480px]:gap-0 max-[480px]:items-center">
      {categories.length === 0 ? (
        <p className="font-bold flex justify-center">Loading...</p>
      ) : (
        categories.map((category) => (
          <Category
            key={category}
            category={category}
            searchParams={searchParams}
            onChooseCategory={handleSelectCategory}
          />
        ))
      )}
    </div>
  );
};

export default Categories;
