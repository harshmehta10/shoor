import { useState, React } from "react";
import kurta from "../../assets/Images/Collection/kurta.png";
import kurta1 from "../../assets/Images/Collection/kurta1.jpg";
import kurta2 from "../../assets/Images/Collection/kurta2.webp";
import kurta3 from "../../assets/Images/Collection/kurta3.webp";
import kurta4 from "../../assets/Images/Collection/kurta4.webp";
import greenkurta from "../../assets/Images/Collection/greenkurta.webp";
import { Link } from "react-router";

const SaarKurta = () => {
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
                to={`/Pdp/${items.id}`}
                // onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="space-y-2"
              >
                {console.log(items.id)}
                <img
                  src={items.icon}
                  alt={items.title}
                  className="mx-auto w-[50%]"
                />

                <div className="space-y-1 text-center">
                  <p className="font-nexabold text-sm lg:text-base">
                    {items.title}
                  </p>
                  <p className="font-roboto font-light text-14">
                    {items.description}
                  </p>
                  <p className="font-roboto font-light text-14 ">
                    {items.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaarKurta;
