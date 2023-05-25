import React from "react";
import Link from "next/link";
import Carts from "component/components/Carts";

const data = [1, 2];
export default function cart() {
  return (
    <main className="p-4 md:mx-14">
      <h1 className="uppercase my-5 text-center text-[#9A5630]">Cart items</h1>
      <div>
        {data.map((d, id) => {
          return <Carts key={id} />;
        })}
      </div>
      <footer className="md:flex-row flex-col flex md:justify-between uppercase ">
        <section className="md:w-1/2">
          <div className="flex justify-between items-center">
            <p>Product in cart:</p>
            <p>1 items</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping:</p>
            <p>1 items</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <p>$45</p>
          </div>
        </section>
        <section className="flex flex-col gap-2 justify-center items-center md:w-1/2">
          <button className="bg-secondary text-white p-2 px-4 uppercase">
            proceed to payment
          </button>
          <Link href="market" className="text-secondary p-2 px-4">
            go to market
          </Link>
        </section>
      </footer>
    </main>
  );
}