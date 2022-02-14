import React from "react";
import { CartItem, DebitCard, SubMenuContainer } from ".";

const RightMenu = () => {
  return (
    <div className="p-[10px] w-full h-auto ">
      <div
        className="debitCard relative w-full h-[170px] min-w-[300px] min-h-[170px] rounded-[15px]
      "
      >
        <DebitCard />
      </div>
      <div className="w-full min-w-[320px]">
        <div className="w-full min-h-[28px] max-h-[400px] mt-[10px] overflow-y-scroll overflow-x-hidden scrollbar-hide">
          <SubMenuContainer name={"Carts Item"} />
          <div className="cartItems">
            <CartItem
              name={"Burger Bristol"}
              imgSrc={
                "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0"
              }
              qty={"4"}
              price={"7.9"}
            />
            <CartItem
              name={"Burger Bristol"}
              imgSrc={
                "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7"
              }
              qty={"7"}
              price={"4.7"}
            />
            <CartItem
              name={"Burger Bristol"}
              imgSrc={
                "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger2.png?alt=media&token=b256ed7a-fe35-4051-9bf5-24f39b79f2b2"
              }
              qty={"3"}
              price={"6.8"}
            />
            <CartItem
              name={"Burger Bristol"}
              imgSrc={
                "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger1.png?alt=media&token=319dfbe9-462b-46ea-8f38-6ca7a20319e0"
              }
              qty={"4"}
              price={"7.9"}
            />
            <CartItem
              name={"Burger Bristol"}
              imgSrc={
                "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdrink1.png?alt=media&token=e9cc5e4e-2194-4766-9d5a-5e01657927b7"
              }
              qty={"7"}
              price={"4.7"}
            />
            <CartItem
              name={"Burger Bristol"}
              imgSrc={
                "https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger2.png?alt=media&token=b256ed7a-fe35-4051-9bf5-24f39b79f2b2"
              }
              qty={"3"}
              price={"6.8"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
