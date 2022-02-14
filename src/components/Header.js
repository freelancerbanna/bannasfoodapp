import React from "react";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";

const Header = () => {
  return (
    <header className="w-full  h-[60px] bg-slate-50 fixed top-0 left-0 z-[999] shadow-2xl bg-bgwhite">
      <div className="container mx-auto flex items-center justify-between pt-2 pb-2 pl-4 pr-4">
        <a
          href="/"
          style={{
            color: "teal",
            boxShadow:
              "rgb(235 235 235) 0px 2px 0px, rgb(64 53 53) 1px 2px 3px, rgb(227 227 227) 4px -3px 2px",
          }}
          className="text-xl font-medium"
        >
          Bannas
          <span style={{ color: "tomato" }}>Food</span>
          App
        </a>
        <div className="bg-slate-100 rounded-3xl shadow-md flex items-center pt-2 pb-2 pl-4 pr-4 overflow-hidden w-[120px] md:w-[70%]">
          <SearchRounded className="text-[#787a84] font-[20px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent w-full h-full border-none outline-none text-[#787a84] pl-2 font-[14px] font-medium"
          />
        </div>
        <div className="relative w-[30px] h-[30px] flex justify-center items-center ">
          <ShoppingCartRounded className="cart font-[30px] text-[#373848]" />
          <div className="cart_content w-5 h-5 bg-bgorange rounded-[100%] min-w-[20px] min-h-[20px] flex items-center justify-center absolute top-[-8px] right-0">
            <p className="font-medium text-bgwhite">2</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-[40px] h-[40px] min-w-[40px] rounded-[100vw] bg-[#444] flex items-center justify-center overflow-hidden">
            <img src="" alt="" className="w-full h-full object-cover" />
          </div>
          <h2 className="font-[16px] ml-2 hidden font-medium">Banna</h2>
        </div>
        <div className="rotate-90">
          <BarChart className="text-[#373848] font-[30px] hover:cursor-pointer clickMenu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
