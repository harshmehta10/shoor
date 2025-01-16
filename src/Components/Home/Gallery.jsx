import { useState, React } from "react";
import pic1 from "../../assets/Images/Home/pic1.png";
import pic2 from "../../assets/Images/Home/pic2.png";
import pic3 from "../../assets/Images/Home/pic3.png";
import pic4 from "../../assets/Images/Home/pic4.png";
import rgtbtn from "../../assets/SVG/rgtbtn.svg";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const images = [
    {
      para: "Saar bringing retro back",
      heading: "Spring Summer",
      btn: "VIEW ALL",
      rightbtn: rgtbtn,
      img: pic1,
    },
    {
      para: "Saar bringing retro back",
      heading: "Spring Summer",
      btn: "VIEW ALL",
      rightbtn: rgtbtn,
      img: pic2,
    },
    {
      para: "Saar bringing retro back",
      heading: "Spring Summer",
      btn: "VIEW ALL",
      rightbtn: rgtbtn,
      img: pic3,
    },
    {
      para: "Saar bringing retro back",
      heading: "Spring Summer",
      btn: "VIEW ALL",
      rightbtn: rgtbtn,
      img: pic4,
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden z-50 relative">
        <div className="gap-6  md:gap-6 lg:gap-2 xl:gap-4 grid grid-cols-1 md:grid-cols-2 lg:max-w-screen-md xl:max-w-none  mx-auto lg:grid-cols-2 xl:grid-cols-4 ">
          {images.map((items, idx) => (
            <div
              key={idx}
              className={`relative w-[326px] overflow-hidden mx-auto transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== idx ? "blur-sm" : ""
              } ${hoveredIndex === idx ? "scale-105 z-20" : ""}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10 space-y-48 flex flex-col">
                <div className="pt-3 pl-3 space-y-2">
                  <h1 className="font-nexabold  lg:text-[10px] text-white">
                    {items.heading}
                  </h1>
                  <p className="font-nexalight text-xl leading-none text-white max-w-40">
                    {items.para}
                  </p>
                </div>
                <div className="self-end pr-5 pb-8 lg:pb-5">
                  <button className="flex gap-7 font-nexabold text-sm text-white items-center">
                    {items.btn}
                    <img src={items.rightbtn} />
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <img
                  src={items.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
          {/* md:w-[326px] lg:w-[380px] xl:w-[326px] h-[330px] md:h-[330px] lg:h-[380px] xl:h-auto */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
