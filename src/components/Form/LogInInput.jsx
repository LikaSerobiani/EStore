/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function LogInInput({ type, placeholder, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="bg-[#fec0d9] text-white px-[35px] py-[15px] border rounded-[10px] placeholder-white outline-none"
    />
  );
}
