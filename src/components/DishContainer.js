import React, { useEffect, useState } from "react";
import { MenuCard, SubMenuContainer, ItemCard } from ".";
import { MenuItems, Items } from "./Data";

const DishContainer = () => {
  const [activeItem, setActiveItem] = useState("");
  useEffect(() => {
    setActiveItem(Items.filter((item) => item.itemId === "buger01"));
  }, []);

  const setItem = (itemId) => {
    setActiveItem(Items.filter((item) => item.itemId === itemId));
  };

  return (
    <div className="w-full py-[10px] px-0 ">
      <div className="menucard w-full">
        <SubMenuContainer name={"Menu Category"} />
      </div>
      <div className="flex items-center my-[10px] mx-0 !scrollbar-hide overflow-x-scroll md:justify-center overflow-y-hidden pt-[25px] pb-[8px] px-0">
        {MenuItems &&
          MenuItems.map(({ id, imgSrc, itemId, name }) => (
            <div key={id} className="mr-[16px]" onClick={() => setItem(itemId)}>
              <MenuCard imgSrc={imgSrc} name={name} />
            </div>
          ))}
      </div>
      <div className="flex justify-around items-center flex-wrap">
        {activeItem &&
          activeItem.map((data) => (
            <ItemCard
              key={data.id}
              itemId={data.id}
              imgSrc={data.imgSrc}
              name={data.name}
              ratings={data.ratings}
              price={data.price}
            />
          ))}
      </div>
    </div>
  );
};

export default DishContainer;
