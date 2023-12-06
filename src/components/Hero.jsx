import React from 'react'
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import TypingHeadline from './TypingHeadline';
import HeroPera from './HeroPera';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const Hero = () => {
  return (
    <div className="w-screen bg-gray-200">
      <div className="container mx-auto bg-gray-200 ">
        <div className="grid grid-cols-2  ">
          <div className=" pt-5 flex items-center pl-10">
            <div>
              {/* import typing headline */}
              <TypingHeadline />
              <div>
                <a href="#">
                  <button
                    class="flex items-center gap-2 px-3 py-2 mt-4 font-sans text-xl font-semibold bg-sky-500 text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
              <div className="flex gap-2 text-2xl pt-4  text-center">
                <FaLinkedin />
                <FaGithub />
                <FaFacebookSquare />
              </div>
            </div>
          </div>

          <div className="pt-8">
            <Player
              autoplay
              loop
              src="https://lottie.host/ab2dfcf9-2e56-4a1c-89ff-f06b903db4f2/W4PqTEuEWg.json"
              style={{ height: "500px", width: "500px" }}
            >
              {/* <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        /> */}
            </Player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero