import React from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div className="relative group mx-auto mt-4">
      <div className="relative w-64 h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10 mx-auto">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transition-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12" />

        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
          <button
            onClick={handleClick}
            name="text"
            className="font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-black"
          >
            Get Started
          </button>
        </div>
        <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-green-500 to-yellow-500 blur-[30px]" />
      </div>
    </div>
  );
};

export default Button;
