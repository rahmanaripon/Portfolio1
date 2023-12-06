import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypingHeadline = () => {
    const [text] = useTypewriter({
        words: ["Website Designer.", "Fontend Developer.", "React Js Developer.", "WordPress Developer."],
        loop: {},
    });
  return (
    <div className="  ">
      <div className=" ">
        <h2 className="text-5xl font-bold font-abc ">Hey,</h2>
        <h1 className="text-5xl  font-abc  pt-5 font-bold">
          I am a <span className="text-sky-500">{text}</span>
          <Cursor />
        </h1>
        <p className="pt-10 font-serif text-xl text-justify">
          I’m
          <span className="text-sky-500 text-xl font-semibold">
            Ataur Rahman Ripon
          </span>
          . FrontEnd Developer with
          <span className="text-sky-500 text-xl font-semibold px-1">
            JavaScript, React Js & WordPress
          </span>
          from Bangladesh. I have rich experience in React jS, JavaScript also I
          am good at WordPress. I love to talk with you about our unique.
        </p>
      </div>
    </div>
  );
}

export default TypingHeadline