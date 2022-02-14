import React, { useState } from "react";
import { Favorite, StarRounded, AddRounded } from "@mui/icons-material";
const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div
      className="itemCard w-[180px] h-[200px] relative flex items-center justify-end flex-col my-[10px] mx-0"
      id={itemId}
    >
      <div
        onClick={() => setFavorite(!isFavorite)}
        className="absolute top-[80px] right-[10px] transition duration-200 z-[100] cursor-pointer"
      >
        <Favorite
          className={`font-[18px] text-bgorange ${
            isFavorite && "!text-[#ff0000] !drop-shadow-favorite"
          }`}
        />
      </div>
      <div className="w-full h-full rounded-[100vw] flex items-center justify-center p-[5px] absolute top-[-10px] z-[99]">
        <img
          src={imgSrc}
          alt=""
          className="h-full object-contain absolute top-0 w-[60%] z-[99]"
        />
      </div>
      <div className="bg-bgwhite shadow-itemShadow rounded-[15px] p-[10px] !pt-[50px] w-full">
        <h3 className="font-[16px]">{name}</h3>
        <div className="flex items-center justify-between">
          <div className="ratings z-[99]">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i key={i} className="rating" onClick={() => handleClick(i + 1)}>
                <StarRounded
                  className={`font-[12px] cursor-pointer z-[99] ${
                    currentValue > i && "text-bgorange"
                  }`}
                />
              </i>
            ))}
            <h3 className="price font-[16px]">
              <span className="font-[12px] text-bgorange">$</span>
              {price}
            </h3>
          </div>
          <i className="addtoCart bg-bgorange w-[25px] h-[25px] rounded-[100%] flex items-center justify-center shadow-itemShadow cursor-pointer">
            <AddRounded className="text-bgwhite font[-15px]" />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
