import React from "react";

const Banner = ({ name, discount, link }) => {
  return (
    <div className="bannerContent p-2 flex flex-col items-start justify-center">
      <h3 className="font-[18px] font-black text-textColor">Hello {name}</h3>
      {/* prettier ignore */}
      <p className="font-[14px] w-[200px] text-[#989594] my-[5px] mx-0">
        Get free discount for every{" "}
        <span className="font-semibold text-bgorange">${discount}</span>{" "}
        purchase
      </p>
      <a
        href={link}
        alt=""
        className="bg-bgorange px-[15px] rounded-[100vw] font-[14px] cursor-pointer text-bgwhite font-medium py-[5px] hover:shadow-homebutton transition duration-100"
      >
        Learn more
      </a>
    </div>
  );
};

export default Banner;
