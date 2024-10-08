import React from "react";

const ButtonNavElements = ({ text }) => {
  return (
    <button className="relative py-2 px-3 sm:px-4 md:px-6 lg:px-8 text-black font-bold rounded-full overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
      <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{text}</span>
    </button>
  );
};

export default ButtonNavElements; 