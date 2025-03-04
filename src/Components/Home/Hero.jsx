import { React, useState, useRef, useEffect } from "react";
import hero from "../../assets/Images/Home/hero.png";
import arrowbtn from "../../assets/SVG/arrowbtn.svg";
import { Link, Links } from "react-router";
import productvideo from "../../assets/videos/productvideo.mp4";
import ReactPlayer from "react-player";
import whitearrowbtn from "../../assets/SVG/whitearrowbtn.svg";
import bgposter from "../../assets/bgposter.jpeg";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };
  {
    /* <ReactPlayer
        url={productvideo}
        controls={false}
        width="100%"
        height="100%"
        playing={isPlaying}
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      /> */
  }
  return (
    <div className="relative [&_video]:object-top">
      {/* Overlay */}

      <div className="bg-black w-full h-full absolute bg-opacity-40 z-50"></div>
      <img className="absolute h-screen w-full object-cover" alt="img" />

      {/* Video */}
      <video
        ref={videoRef}
        src={productvideo}
        autoPlay={true}
        muted
        controls={false}
        loop
        className="absolute h-full w-full object-cover"
        poster={bgposter}
      ></video>

      {/* Play/Pause Button */}
      <button
        className="absolute bottom-20 right-4 z-50 bg-black text-white px-4 py-2 rounded shadow-lg"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        )}
      </button>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-28 sm:py-20   flex flex-col items-center space-y-11">
        <div className="relative z-50 flex flex-col lg:flex-row justify-center items-center gap-12 text-center md:text-start">
          <Link to="/elite" className="group">
            <span className="relative inline-block">
              <h1 className="text-white font-nexaReg text-14">ELITE APPAREL</h1>
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-500 w-0 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/classic" className="group">
            <span className="relative inline-block">
              <h1 className="text-white font-nexaReg text-14">
                TRADITIONAL WEAR
              </h1>
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-500 w-0 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/organic" className="group">
            <span className="relative inline-block">
              <h1 className="text-white font-nexaReg text-14">
                ORGANIC GROOMING
              </h1>
              <span className="absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-500 w-0 group-hover:w-full"></span>
            </span>
          </Link>
        </div>

        <div className="h-12 lg:h-24 w-[1px] lg:w-0.5 bg-white relative z-50 shrink-0 "></div>
        <div className="relative z-50 space-y-4 lg:space-y-7 flex flex-col justify-center items-center py">
          <h1 className=" text-white font-nexabold text-14 text-center">
            SPRING SUMMER COLLECTION 2020
          </h1>
          <div className="relative z-50 text-white  space-y-5 lg:space-y-12 flex flex-col justify-center items-center max-w-2xl">
            <h1 className="font-nexabold text-3xl md:text-4xl lg:text-6xl text-center leading-none">
              Saar bringing retro back
            </h1>

            <p className="font-roboto font-normal text-base md:text-lg lg:text-xl text-center">
              Discover the handcrafted amalgamation of tradition art and age-old
              craftmanship with tendy styles and silhouettes.{" "}
            </p>

            <Link
              to="/collection"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <button className="bg-white text-black font-nexabold py-3 lg:py-5 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base group hover:text-white hover:bg-black transition-all duration-700 ease-in-out ">
                SHOP NOW
                <svg
                  width="62"
                  height="22"
                  viewBox="0 0 62 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="10.8989"
                    x2="59"
                    y2="10.8989"
                    stroke="black"
                    stroke-width="2"
                    className="transition-all  ease-in-out duration-700 group-hover:stroke-white"
                  />
                  <path
                    d="M49.8996 20.7984L59.7991 10.8989L49.8996 0.999431"
                    stroke="black"
                    stroke-width="2"
                    className="transition-all ease-in-out duration-700 group-hover:stroke-white"
                  />
                </svg>
                {/* <img
                  src={isHovered ? whitearrowbtn : arrowbtn}
                  alt="arrow btn"
                /> */}
              </button>
            </Link>
          </div>
          <div className="h-12 lg:h-24 w-[1px] lg:w-0.5 bg-white relative z-50 shrink-0 "></div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
