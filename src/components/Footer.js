import React from "react";
import {
  AccountBalanceRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { MenuContainer } from ".";

const Footer = () => {
  return (
    <footer>
      <div className="fixed bottom-0 left-0 flex items-center z-[999] justify-center w-full h-[60px] bg-[#d5d5d5] rounded-tl-[25px] rounded-tr-[25px]">
        <ul id="menu" className="flex items-center">
          <MenuContainer link={"#"} icon={<HomeRounded />} active={"active"} />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />
          <div className="indicator absolute h-[60px] w-[60px] bg-bgorange rounded-[100vw] top-[-50%] border-[6px] border-[#faf9fb] transition ease-in-out duration-[700ms] before:content-[''] before:absolute before:w-[18px] before:top-[50%] before:left-[-20px] before:h-[18px] before:bg-transparent before:rounded-tr-[18px]  after:content-[''] after:absolute after:w-[18px] after:top-[50%] after:right-[-20px] after:h-[18px] after:bg-transparent after:rounded-tl-[18px] before:shadow-indicator after:shadow-indicator"></div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
