import { ChevronRightRounded } from "@mui/icons-material";
import React, { useEffect } from "react";

const MenuCard = ({ imgSrc, name, isActive }) => {
  useEffect(() => {
    const menuCard = document.querySelectorAll(".menuCard");
    function listClciked() {
      menuCard.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((i) => i.addEventListener("click", listClciked));
  }, []);
  return (
    <div
      className={`w-[80px] menuCard min-w-[80px] h-[100px] rounded-[10px] bg-bgwhite flex hover:text-bgwhite hover:bg-bgorange ${
        isActive && "!bg-bgorange"
      } items-center justify-between flex-col p-[5px] shadow-cardShadow cursor-pointer transition duration-300`}
    >
      <div className="w-[40px] h-[40px] min-h-[40px] min-w-40px] rounded-[100vw] bg-bgorange p-[2px] flex items-center justify-center overflow-hidden hover:bg-bgwhite transition duration-300 !mr-[8px]">
        <img src={imgSrc} alt="" className="object-contain w-full h-full" />
      </div>
      <h3
        className={`text-bgorange ${
          isActive && "!text-bgwhite"
        } font-[14px] font-medium transition duration-300`}
      >
        {name}
      </h3>
      <i className="w-[20px] h-[20px] flex content-center justify-center bg-bgorange rounded-[5px] transition duration-150">
        <ChevronRightRounded className="font-[34px] text-bgwhite" />
      </i>
    </div>
  );
};

export default MenuCard;
