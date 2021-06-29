import Image from "next/image";
import React from "react";

export default function Landing() {
  return (
    <div className="h-screen bg-landing-background text-center">
      <div className="flex justify-center mx-auto pt-10">
        <Image
          src="/mathletes.jpg"
          height={200}
          width={200}
          className="block mx-auto "
        />
      </div>

      <p
        className="text-secondary text-4xl md:text-7xl lg:text-8xl pt-16 md:pt-20 font-bold "
        style={{ fontFamily: "Merriweather, serif" }}
      >
        Douglas Mathletes Meet 2021
      </p>
      <p
        className="text-white mt-5 text-xl md:text-5xl"
        style={{ fontFamily: "Pacifico, sans-serif" }}
      >
        Maths around us: explore if you can
      </p>
      <p className="text-white text-3xl md:text-7xl font-semibold mt-24 mb-12 md:mb-20">
        24 July to 25 July, 2021
      </p>
      <span
        className="bg-yellow-500 text-black mx-auto rounded-lg text-3xl md:text-4xl p-5 cursor-pointer"
        onClick={() => {
          window.location.href = "/register";
        }}
      >
        Register Now
      </span>
      {/* <p className="text-center text-white mt-36 text-base md:text-xl animate-bounce hidden">
        Scroll down to learn more
        <svg
          className="inline-block ml-2"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26Z"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M9.20001 12.2L14 17L18.8 12.2"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </p> */}
    </div>
  );
}
