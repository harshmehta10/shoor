import { useState, React } from "react";
import kurta from "../../assets/Images/Collection/kurta.png";
import { Link } from "react-router";

const SaarKurta = () => {
  const kurtaData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 ">
          {kurtaData.map((items, idx) => (
            <div
              key={idx}
              className={`relative w-[326px] overflow-hidden mx-auto transition-all duration-300 ${
                hoveredIndex !== null && hoveredIndex !== idx ? "blur-sm" : ""
              } bg-[#FAFAFA] space-y-11 py-10 ${
                hoveredIndex === idx ? "scale-105 z-20" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                to="/Pdp"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <img src={kurta} alt="" className="mx-auto py" />
              </Link>
              <div className="space-y-2 text-center">
                <p className="font-nexabold text-sm lg:text-base">Saar Kurta</p>
                <p className="font-roboto font-light text-14">
                  Lorem Ipsum is simply
                </p>
                <p className="font-roboto font-light text-14 "> ₹ 1600</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaarKurta;
