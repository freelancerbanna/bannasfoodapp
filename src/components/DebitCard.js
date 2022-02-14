import React from "react";

const DebitCard = () => {
  return (
    <div className="relative overflow-hidden w-full h-full">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266"
        alt=""
        className="w-[60px] top-[30px] right-[30px] h-auto absolute"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
        alt=""
        className="w-[40px] h-auto top-[50px] left-[30px]  absolute"
      />
      <div className="bg-bgwhite font-normal tracking-[2px] left-[30px] bottom-[60px] absolute">
        12345 66675
      </div>
      <div className="bg-bgwhite font-normal tracking-[2px] font-[12px] bottom-[30px] left-[30px] absolute">
        Bana Banna
      </div>
      <div className="bg-bgwhite font-normal tracking-[2px] font-[12px] bottom-[30px] right-[90px]  absolute">
        10/22
      </div>
      <div className="bg-bgwhite font-normal tracking-[2px] bottom-[30px] right-[30px] font-[12px] absolute">
        10/25
      </div>
      <div
        className=" font-normal h-[400px] w-[400px] rounded-[100vw] bg-transparent border-[50px] border-solid border-ringBorder absolute top-[-210px] right-[-250px] box-border
      after:
      "
      ></div>
    </div>
  );
};

export default DebitCard;
