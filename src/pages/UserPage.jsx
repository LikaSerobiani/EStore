/* eslint-disable no-unused-vars */ // Disable eslint for unused variables

// Importing necessary modules and components
import React, { useState, useEffect, useContext } from "react";
import LogInInput from "../components/Form/LogInInput";
import SocialMedia from "../components/Form/SocialMedia";
import formImage from "../assets/images/FormImage.jpg";
import axios from "axios";

// Importing icons
import FacebookIcon from "../components/Icons/FacebookIcon";
import GoogleIcon from "../components/Icons/GoogleIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";

import { UserContext } from "../App";

export default function UserPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const { setUserData } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  const handleLogIn = async () => {
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        { username: userName, password: password },
        { headers: { "Content-Type": "application/json" } }
      );

      const result = response.data;
      setUserData({ username: userName, token: JSON.stringify(result) });
      localStorage.setItem("username", userName);
      localStorage.setItem("token", JSON.stringify(result));
      setLoggedIn(true);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUserData({});
    setLoggedIn(false);
  };

  return (
    <div className="container flex justify-center ">
      <div className="bg-white flex flex-row justify-around items-center border rounded-[40px] py-[30px] w-[1100px] max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-10 max-[768px]:w-[600px] max-[480px]:w-[400px]">
        <div className="form-image">
          <img
            src={formImage}
            alt="form image"
            className="w-[700px] border rounded-[40px] max-[768px]:w-[500px] max-[480px]:w-[300px]"
          />
        </div>
        <div className="form">
          <div className="flex flex-col items-center gap-[15px] ">
            <h1 className="font-bold text-3xl">
              Hello {loggedIn ? "Again!" : ""}
            </h1>
            <p>
              Welcome back,
              {loggedIn
                ? localStorage.getItem("username") || "you've been missed"
                : "you've been missed"}
              !
            </p>

            <div className="flex gap-[10px] flex-col">
              {!loggedIn && (
                <>
                  <LogInInput
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <LogInInput
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col items-center gap-[15px]">
              {loggedIn ? (
                <>
                  <p className="font-bold">
                    You are logged in as {localStorage.getItem("username")}
                  </p>
                  <button
                    className="bg-[#d996fd] text-white px-[100px] py-[10px] font-bold border rounded-[10px]"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-[#d996fd] text-white px-[100px] py-[10px] font-bold border rounded-[10px]"
                    onClick={handleLogIn}
                  >
                    Log In
                  </button>
                  <span>Or continue with</span>
                  <div className="flex flex-row gap-[10px] cursor-pointer">
                    <SocialMedia>{FacebookIcon}</SocialMedia>
                    <SocialMedia>{GoogleIcon}</SocialMedia>
                    <SocialMedia>{InstagramIcon}</SocialMedia>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
