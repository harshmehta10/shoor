import { React, useState, useRef } from "react";
import productvideo from "../../assets/videos/productvideo.mp4";
import ReactPlayer from "react-player";

const HeroCollect = () => {
  const [isPlaying, setIsPlaying] = useState(true);
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
  return (
    <div className="relative [&_video]:object-top">
      {/* Overlay */}

      <div className="bg-black w-full h-full absolute bg-opacity-40 z-10"></div>

      {/* Video */}
      <video
        ref={videoRef}
        src={productvideo}
        autoPlay={true}
        muted
        controls={false}
        loop
        className="absolute h-full w-full object-cover"
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
      
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden z-50 relative ">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="font-nexabold text-4xl md:text-6xl lg:text-[80px] text-white">
            SUMMERS
          </h1>
          <p className="font-nexaReg text-sm md:text-lg lg:text-3xl text-white">
            THE COLLECTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCollect;
