import React, { useContext } from "react";
import { UserContext } from "../ContextAPI/UserContext";
import Card from "./Card";
import Card2 from "./Card2";
import Header from "./Header";

const Cart = () => {
  const { cartarray,price,setprice } = useContext(UserContext);
  console.log(price);

  var value=0;
  return (
    <div>
      <Header />
      {
        cartarray.length === 0 ? 
        (
          <p>Cart is empty</p>
        )
        :
        (
          <div className="mt-28 mb-20">
            <div className="text-center font-semibold text-2xl">Your Cart Items:{cartarray.length} items</div>
            <div className="flex flex-row justify-evenly items-center my-10 pb-4 border-b-2 capitalize text-xl font-semibold w-[680px] mx-auto">
              <div>Item</div>
              <div>Description</div>
              <div>Reviews</div>
              <div>Price</div>
            </div>
            <div className="flex flex-col items-center flex-wrap justify-evenly gap-x-5 gap-y-10 w-full">
              {
                cartarray.map((dat) => {
                  value=value+parseInt(dat?.dat?.newPrice);
                  return <Card2 dat={dat} />;
                })
              }
              {setprice(value)}
              <div>
                <div>Total Items: {cartarray.length}</div>
                <div>Total Price: {price}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Cart;
