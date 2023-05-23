import React from "react";
import Image from "next/image";
import plane from "../../public/plane.png";
import heart from "../../public/heart.png";
import tape from "../../public/tape.png";

export default function Icon() {
  return (
    <main className="my-5 flex md:flex-row md:justify-between flex-col gap-5 md:p-8 md:px-16  justify-items-center  items-center ">
      <section className="md:w-2/3 flex w-full p-4 justify-between md:px-16">
        <div className="flex flex-col gap-2 items-center">
          <Image src={plane} alt="plane" />
          <p className="text-center">
            Delivery time 3-5 business days <br />
            <span>Free shipping</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src={heart} alt="plane" />
          <p className="text-center">
            +55,000 clients trust <br />
            <span>CreativeShop</span>
          </p>
        </div>
      </section>
      <div className="flex flex-col gap-2 items-center  md:w-2/5">
        <Image src={plane} alt="plane" />
        <p className="text-center">
          French manufacturing Made <br />
          <span>with passion</span>
        </p>
      </div>
    </main>
  );
}
