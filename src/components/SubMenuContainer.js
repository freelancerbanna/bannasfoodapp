import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

const SubMenuContainer = ({ name }) => {
  return (
    <div className="flex justify-between items-center pt-9 z-50">
      <h3 className="font-[20px] font-semibold text-textColor">{name}</h3>
      <div className="flex justify-between items-center z-50">
        <p className=" font-[18px] text-bgorange font-normal">View All</p>
        <i className="bg-bgorange w-[20px] h-[20px] min-w-[20px] rounded-[5px] flex items-center justify-center">
          <ChevronRightRounded className="font-[16px] text-bgwhite" />
        </i>
      </div>
    </div>
  );
};

export default SubMenuContainer;
