/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import firstImage from "../../assets/images/Rectangle25.png";
import secondImage from "../../assets/images/Rectangle27.png";
import thirdImage from "../../assets/images/Rectangle29.png";
import fourthImage from "../../assets/images/Rectangle31.png";
import fifthImage from "../../assets/images/Rectangle33.png";
import sixthImage from "../../assets/images/Rectangle35.png";
import seventhImage from "../../assets/images/Rectangle37.png";
import eighthImage from "../../assets/images/Rectangle39.png";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex justify-center">
      <Slider
        {...settings}
        className="mb-[100px] w-[1200px] max-[480px]:w-[400px] max-[768px]:w-[650px] "
      >
        <div>
          <img
            src={firstImage}
            alt="Image 1"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Craft Kits
          </h1>
        </div>
        <div>
          <img
            src={secondImage}
            alt="Image 2"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Throw Pillows
          </h1>
        </div>
        <div>
          <img
            src={thirdImage}
            alt="Image 3"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Natural Glass
          </h1>
        </div>
        <div>
          <img
            src={fourthImage}
            alt="Image 3"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Self-care
          </h1>
        </div>
        <div>
          <img
            src={fifthImage}
            alt="Image 3"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Gift Ideas
          </h1>
        </div>
        <div>
          <img
            src={sixthImage}
            alt="Image 3"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Wall Decor
          </h1>
        </div>
        <div>
          <img
            src={seventhImage}
            alt="Image 3"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Wedding
          </h1>
        </div>
        <div>
          <img
            src={eighthImage}
            alt="Image 3"
            className="w-[220px] max-[480px]:w-[150px] max-[768px]:w-[120px]"
          />
          <h1 className="font-bold text-center text-lg max-[480px]:text-xs max-[480px]:font-normal max-[480px]:text-center max-[768px]:text-sm max-[768px]:font-normal">
            Life Style
          </h1>
        </div>
      </Slider>
    </div>
  );
}
