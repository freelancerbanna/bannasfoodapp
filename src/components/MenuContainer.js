import React, { useEffect } from "react";

const MenuContainer = ({ link, icon, active }) => {
  useEffect(() => {
    const list = document.querySelectorAll(".list");
    function listClciked() {
      list.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
    }

    list.forEach((i) => i.addEventListener("click", listClciked));
  }, []);

  return (
    <li className={`list ${active} relative list-none w-[60px] h-[60px] z-1`}>
      <a
        href={link}
        className="flex relative items-center justify-center w-full flex-col text-center font-medium"
      >
        <span className="icon relative block !text-[60px] text-[#373848] leading-[70px] text-center transition !duration-[300ms] z-50">
          {icon}
        </span>
      </a>
    </li>
  );
};

export default MenuContainer;
