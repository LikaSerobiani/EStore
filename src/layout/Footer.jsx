/* eslint-disable no-unused-vars */
import React from "react";
// Icons
import ArrowTop from "../components/Icons/ArrowTop";
import FacebookIcon from "../components/Icons/FacebookIcon";
import TwitterIcon from "../components/Icons/TwitterIcon";
import GoogleIcon from "../components/Icons/GoogleIcon";
import InstagramIcon from "../components/Icons/InstagramIcon";
import EmailIcon from "../components/Icons/EmailIcon";
import PhoneIcon from "../components/Icons/PhoneIcon";
import PrintIcon from "../components/Icons/PrintIcon";
import LocationIcon from "../components/Icons/LocationIcon";

export default function Footer() {
  return (
    <>
      <div className="mt-[100px] flex justify-center">
        <span>Commerce, is powered by 100% renewable electricity.</span>
      </div>
      <footer className="bg-white text-center text-black mt-[20px]">
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 text-center md:text-left flex flex-row justify-between flex-wrap max-[768px]:flex max-[768px]:gap-[40px] max-[480px]:flex  max-[480px]:flex-col  max-[480px]:items-center">
          {/* <!--  E-commerce section --> */}
          <div className="flex flex-col justify-between items-start  max-[480px]:flex  max-[480px]:items-center  max-[480px]:gap-[20px]">
            <div className="text">
              <h1 className="mb-4 flex items-center justify-center text-primary text-xl font-bold md:justify-start  max-[480px]:text-2xl">
                E-commerce
              </h1>
              <p>Cricklewood,London NW2 6qg, Uk</p>
            </div>
            {/* <!-- Social network icons container --> */}
            <div className="flex justify-center gap-[24px]">
              <a>
                <FacebookIcon />
              </a>
              <a>
                <TwitterIcon />
              </a>
              <a>
                <GoogleIcon />
              </a>
              <a>
                <InstagramIcon />
              </a>
            </div>
          </div>
          {/* <!-- Products section --> */}
          <div className="Products-wrapper">
            <div className="flex flex-col gap-[1rem]">
              <h6 className="flex justify-center font-semibold uppercase md:justify-start max-[480px]:text-xl">
                Shop
              </h6>
              <p>Gift cards</p>
              <p>Site map</p>
              <p>Polka blog</p>
              <p>Login</p>
              <p>Sign in</p>
            </div>
          </div>
          {/* <!--Sell section --> */}
          <div className="sell-section-wrapper">
            <div className="flex gap-[1rem] flex-col">
              <h6 className="flex justify-center font-semibold uppercase md:justify-start  max-[480px]:text-xl">
                Sell
              </h6>
              <p>Sell on Polka</p>
              <p>Teams</p>
              <p>Forums</p>
              <p>Affiliates</p>
            </div>
          </div>
          {/* <!-- Help section --> */}
          <div className="help-section-wrapper">
            <div className="flex gap-[1rem] flex-col">
              <h6 className=" flex justify-center font-semibold uppercase md:justify-start  max-[480px]:text-xl">
                Help
              </h6>
              <p>Help Center</p>
              <p>Trust and safety</p>
              <p>Privacy settings</p>
            </div>
          </div>
          {/* <!-- Contact section --> */}
          <div className="contact-wrapper">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start  max-[480px]:text-xl">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <LocationIcon />
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <EmailIcon />
              E-commerce@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <PhoneIcon />+ 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <PrintIcon />+ 01 234 567 89
            </p>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-[#fff9f3] p-6 text-center ">
          <div className="flex flex-row justify-center gap-[50px] max-[480px]:flex max-[480px]:flex-col max-[480px]:gap-[20px] max-[480px]:items-center">
            <span className="max-[480px]:text-sm">© 2022 Commerce, Inc.</span>
            <div className="flex gap-5 max-[480px]:text-sm">
              <span>Privacy policy</span>
              <span className="text-secondary">Terms of use</span>
              <span>Cookies</span>
            </div>
            <div className="flex items-center gap-2 ">
              <span className="max-[480px]:text-sm">Scroll to top</span>
              <ArrowTop />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
