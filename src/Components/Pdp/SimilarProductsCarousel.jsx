import React from "react";
import Slider from "react-slick";
import { Link } from "react-router";
import kurta from "../../assets/Images/Collection/kurta.png";
import kurta1 from "../../assets/Images/Collection/kurta1.jpg";
import kurta2 from "../../assets/Images/Collection/kurta2.webp";
import kurta3 from "../../assets/Images/Collection/kurta3.webp";
import kurta4 from "../../assets/Images/Collection/kurta4.webp";
import greenkurta from "../../assets/Images/Collection/greenkurta.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

const SimilarProductsCarousel = () => {
  const kurtaData = [
    {
      id: 1,
      icon: kurta,
      title: "Classic Kurta",
      price: "₹ 1600",
      description: "Elegant and stylish",
    },
    {
      id: 2,
      icon: greenkurta,
      title: "Green Charm",
      price: "₹ 1500",
      description: "Comfort meets tradition",
    },
    {
      id: 3,
      icon: kurta1,
      title: "Royal Attire",
      price: "₹ 1700",
      description: "Premium fabric design",
    },
    {
      id: 4,
      icon: kurta2,
      title: "Minimal Kurta",
      price: "₹ 1400",
      description: "Simple yet elegant",
    },
    {
      id: 5,
      icon: kurta3,
      title: "Festive Wear",
      price: "₹ 1800",
      description: "Perfect for celebrations",
    },
    {
      id: 6,
      icon: kurta4,
      title: "Casual Comfort",
      price: "₹ 1200",
      description: "Soft and breathable",
    },
  ];

  // Configure React Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 3000ms (3 seconds)
    responsive: [
      {
        breakpoint: 1024, // Screen size below 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Screen size below 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480, // Screen size below 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 space-y-5">
      <div className="flex justify-center">
        <h2 className="font-nexalight text-xl md:2xl lg:text-4xl ">
          Buy Similar Products
        </h2>
      </div>
      <Slider {...settings}>
        {kurtaData.map((item) => (
          <div
            key={item.id}
            className="py-10 hover:scale-105 duration-500 ease-in-out "
          >
            <Link to={`/Pdp/${item.id}`} className="space-y-2">
              <img
                src={item.icon}
                alt={item.title}
                className="mx-auto w-[50%]"
              />
              <div className="text-center space-y-1">
                <p className="font-nexabold text-sm lg:text-base">
                  {item.title}
                </p>
                <p className="font-roboto font-light text-14">
                  {item.description}
                </p>
                <p className="font-roboto font-light text-14">{item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarProductsCarousel;
