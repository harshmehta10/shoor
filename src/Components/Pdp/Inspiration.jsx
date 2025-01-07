import { React, useState, useRef } from "react";
import brownkurta from "../../assets/Images/pdp/brownkurta.png";
import blueyellowkurta from "../../assets/Images/pdp/blueyellowkurta.png";
import productvideo from "../../assets/videos/productvideo.mp4";

const Inspiration = () => {
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
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-12 lg:space-y-36">
        <div className="flex justify-center">
          <img src={brownkurta} alt="" className="rounded-full" />
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-nexalight text-3xl md:4xl lg:text-6xl -ml-60 lg:-ml-80">
            The Design
          </h1>

          <p className="font-roboto font-light text-base md:text-lg lg:text-xl max-w-[620px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
      </div>
      <div className="relative ">
        <video
          ref={videoRef}
          src={productvideo}
          autoPlay={true}
          muted
          controls={false}
          loop
          className=" h-full w-full object-cover"
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
      </div>
    </div>
  );
};

export default Inspiration;
