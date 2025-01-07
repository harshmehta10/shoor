import React from "react";
import Slider from "react-slick";
import bluekurta from "../../assets/Images/Collection/bluekurta.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SaarBluekurta = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Custom Next Arrow
  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={onClick}
      >
        {"→"}
      </button>
    );
  }

  // Custom Prev Arrow
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-3xl lg:rounded-full z-10"
        onClick={onClick}
      >
        {"←"}
      </button>
    );
  }

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="flex flex-col items-center space-y-8">
          {/* Header Text */}
          <div className="space-y-6 max-w-[620px] text-center">
            <h1 className="font-nexabold text-2xl">Saar bringing retro back</h1>
            <p className="font-roboto font-light text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Slider */}
          <div className="relative w-full">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index}>
                  <img
                    src={bluekurta}
                    alt={`Slide ${index + 1}`}
                    className="w-full"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Footer Text */}
          <h1 className="font-nexabold text-2xl">Saar bringing retro back</h1>
        </div>
      </div>
    </div>
  );
};

export default SaarBluekurta;
