import React from "react";

const Card = ({ title, description, icon, number }) => {
  return (
    <div className="service-card w-[350px] sm:w-[400px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
      <div className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400">
        {icon}
      </div>
      <p className="font-bold text-2xl group-hover:text-white text-black/80">
        {title}
      </p>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
      <p
        style={{
          WebkitTextStroke: "1px gray",
          WebkitTextFillColor: "transparent",
        }}
        className="text-5xl font-bold self-end"
      >
        {number}
      </p>
    </div>
  );
};

export default Card;
