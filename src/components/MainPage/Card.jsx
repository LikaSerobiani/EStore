/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Card({ title, description, image }) {
  return (
    <div className=" p-[20px] flex flex-row bg-gray-background shadow-2xl max-[768px]:w-[400px]">
      <div>
        <h1 className="font-medium text-[20px] w-[230px]">{title}</h1>
        <p className="w-[220px]">{description}</p>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}
