import React from "react";
import Image from "next/image";
import demo from "../../public/framez.jpg";
import { CartType } from "component/types";
import { BsTrash } from "react-icons/bs";
import {
  removeCart,
  totalCarts,
} from "component/features/product/productSlice";
import { useDispatch } from "react-redux";

export type cartPropType = {
  cart: CartType;
};

export default function Carts({ cart }: cartPropType) {
  const dispatch = useDispatch();
  const { image, name, price, amount, id, total } = cart;
  const handleClick = () => {
    dispatch(removeCart(id) as any);
    dispatch(totalCarts() as any);
  };
  return (
    <main className="my-5 flex flex-col md:flex-row gap-5 p-10 border-b-2">
      <div className="md:w-1/2">
        <Image
          src={image}
          width={400}
          height={400}
          alt="demo"
          className="w-full h-52 object-cover"
        />
      </div>
      <section className="md:w-1/2 flex flex-col md:justify-center items-center gap-3 uppercase md:gap-10">
        <div className="flex md:flex-row flex-col gap-3 justify-between w-full">
          <p>{name}</p>
          <BsTrash className="text-xl" onClick={() => handleClick()} />
        </div>
        <div className="flex justify-between w-full capitalize">
          <div className="flex items-center gap-3">
            <p>Quantity: {amount}</p>
          </div>
          <p>Price: ${price}</p>
        </div>
        <p>Total:{total}</p>
      </section>
    </main>
  );
}
