/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

import { blogs } from "../components/MainPage/Constants";

import Card from "../components/MainPage/Card";
import Carousel from "../components/MainPage/Carousel";

import mainImage from "../assets/images/main-picture.png";

export default function MainPage() {
  return (
    <div className="container max-[768px] flex flex-col items-center">
      <div className="flex items-center pb-[100px] flex-col justify-center">
        <div className="absolute">
          <div className="flex flex-row items-center gap-[300px] max-[480px]:gap-[30px] max-[480px]:flex max-[480px]:flex-col max-[480px]:items-start  max-[768px]:gap-[40px]">
            <div className="relative">
              <div className="flex flex-col">
                <span className="text-[40px] font-bold text-white">
                  What's New!
                </span>
                <span className="text-white">
                  Just millions of people selling the things they love.
                </span>
              </div>
            </div>
            {/* Products button */}
            <div className="relative text-white">
              <Link to="/products">
                <button className="font-medium bg-gray-800 px-[25px] py-[15px] border rounded-2xl max-[768px]:p-[10px]">
                  View products
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          src={mainImage}
          alt="Card Image"
          className="max-[480px]:w-[600px]"
        />
      </div>
      {/* Slider */}
      <Carousel />
      {/* Cards */}
      <div className="flex flex-row gap-[30px] justify-center items-center max-[480px]:flex max-[480px]:flex-col max-[768px]:flex  max-[768px]:flex-col">
        {blogs.map((card, i) => (
          <Card
            title={card.title}
            description={card.description}
            image={card.image.src}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
