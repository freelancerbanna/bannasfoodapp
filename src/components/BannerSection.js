import React from "react";
import { Banner, DishContainer } from ".";

const BannerSection = () => {
  return (
    <div className="mainContainer w-full h-auto bg-bgwhite p-[10px] !pb-[100px] ">
      <div
        style={{
          backgroundImage: "url('/assets/home-banner.png')",
        }}
        className="banner w-full h-[130px] rounded-[10px] bg-no-repeat bg-cover bg-center relative flex items-center py-0 px-[10px]"
      >
        <Banner name={"Banna"} discount={"10"} link={"#"} />
        <img
          src="/assets/delivery.png"
          alt=""
          className="absolute right-[50px] bottom-[-40px] w-[200px]"
        />
      </div>
      {/* dish container */}
      <DishContainer />
    </div>
  );
};

export default BannerSection;
