import React from 'react'
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import CardData from './CardData';



const MySkills = () => {
  return (
    <div className="bg-sky-100 w-screen">
      <div className="pt-10 flex gap-2 items-center justify-center">
        <hr className="h-px w-20  bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="text-2xl px-4 py-2 rounded-md bg-sky-300">
          Expertise
        </span>
        <hr className="h-px w-20 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <div className="container mx-auto grid grid-cols-2">
        <div className="pt-28">
          <Player
            autoplay
            loop
            src="https://lottie.host/413ffe2c-cf82-41f5-9d07-6a4aee243109/K3CnR2VCJ4.json"
            style={{ height: "550px", width: "650px" }}
          ></Player>
          <p className="text-xl  font-medium font-abc">
            These are my skills and this contains all the technologies and
            programming languages that I have learnt until now. I am constantly
            learning, therefore I may update this section more often.
          </p>
        </div>
        <div className="py-10">
          <div className="">
            <h1 className="text-5xl font-abc font-bold">
              As a <span className="text-sky-500">Front End Developer</span> I'm
              good at using:
            </h1>

            <CardData />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills