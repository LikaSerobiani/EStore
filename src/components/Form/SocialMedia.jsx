/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function SocialMedia({ children }) {
  return (
    <div className="icon">
      <div>{children()}</div>
    </div>
  );
}
