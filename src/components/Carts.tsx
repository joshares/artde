import React from "react";
import Image from "next/image";
import demo from "../../public/framez.jpg";
import { CartType } from "component/types";

export type cartPropType = {
  cart: CartType;
};

export default function Carts({ cart }: cartPropType) {
  const { image, name, price, amount, id, total } = cart;
  return (
    <main className="my-5 flex flex-col md:flex-row gap-5 p-10 border-b-2">
      <div className="md:w-1/2">
        <Image
          src={image}
          width={800}
          height={800}
          alt="demo"
          className="w-full h-52"
        />
      </div>
      <section className="md:w-1/2 flex flex-col md:justify-center items-center gap-3 uppercase md:gap-10">
        <div className="flex justify-between w-full">
          <p>{name}</p>
          <p>cancel</p>
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
