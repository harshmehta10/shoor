import React, { useEffect, useState } from "react";
import message from "../../assets/SVG/Message.svg";
import arrowbtn from "../../assets/SVG/arrowbtn.svg";
import whitearrowbtn from "../../assets/SVG/whitearrowbtn.svg";

import { interpolate } from "flubber";
import { useTransform, useMotionValue, motion, animate } from "framer-motion";

export const getIndex = (_, index) => index;

export function useFlubber(progress, paths) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}

const close =
  "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75";

const open =
  "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z";

const paths = [close, open];

const Connect = () => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        // if (pathIndex === paths.length - 1) {
        //   progress.set(0);
        //   setPathIndex(1);
        // } else {
        //   setPathIndex(pathIndex + 1);
        // }
      },
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden">
        <div className="space-y-5">
          <div className="border border-black rounded-full flex justify-center items-center size-36 mx-auto group hover:bg-black transition-all  ease-in-out duration-500">
            {/* <img src={message} alt="message" className=" " /> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              // className="size-6S"
              onMouseEnter={() => setPathIndex(1)}
              onMouseLeave={() => setPathIndex(0)}
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={path}
              />
            </svg> */}
            <svg
              width="70"
              height="47"
              viewBox="0 0 70 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="68"
                height="44.6667"
                rx="6"
                stroke="black"
                stroke-width="2"
                className="transition-all  ease-in-out duration-500 group-hover:stroke-white"
              />
              <path
                d="M7.5 9.16675L34.5833 27.5001L61.6667 9.16675"
                stroke="black"
                stroke-width="1.5"
                className="transition-all  ease-in-out duration-500 group-hover:stroke-white"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center space-y-7">
            <h1 className="text-center text-14 font-nexabold">STAY IN TOUCH</h1>
            <p className="font-nexalight text-[#969696] text-center text-14">
              Sign up for our newsletter to receive customized product news,
              updates and special invites.
            </p>
            {/* <button
              className={`bg-white text-black font-nexabold py-3 lg:py-5 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base  border-black border-2 ${
                isHovered ? "hover:text-white hover:bg-black" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              SUBSCRIBE
              <img src={isHovered ? whitearrowbtn : arrowbtn} alt="" />
            </button> */}
            <button className="bg-white text-black font-nexabold py-3 lg:py-5 px-3 lg:px-5 flex items-center gap-10 lg:gap-20 text-xs md:text-sm lg:text-base border-black border-2  group hover:text-white hover:bg-black transition-all duration-700 ease-in-out ">
              SUBSCRIBE
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
