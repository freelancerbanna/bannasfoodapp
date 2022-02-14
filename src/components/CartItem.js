import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React from "react";

const CartItem = ({ price, name, imgSrc, qty }) => {
  return (
    <div className="flex items-center my-2 mx-0">
      <div className="w-[60px] min-w-[60px] h-[60px] min-h-[60px] bg-[#00ffc855] rounded-[10px] flex items-center justify-center p-[5px]">
        <img src={imgSrc} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="ml-[10px] ">
        <h2 className="font-[16px] text-textColor">{name}</h2>
        <div className="font-[16px] text-textColor flex items-center justify-between w-[120px]">
          <span className="text-bgorange">{qty}</span>
          <div className="flex items-center justify-between cursor-pointer w-[60px]">
            <RemoveRounded className="text-textColor font-[24px]" />
            <AddRounded className="text-textColor font-[24px]" />
          </div>
        </div>
      </div>
      <p className="font-[16px] font-semibold text-textColor ml-auto">
        <span className="font-[12px] text-bgorange">$</span>
        <span className="font-[16px] text-textColor">{price}</span>
      </p>
    </div>
  );
};

export default CartItem;
