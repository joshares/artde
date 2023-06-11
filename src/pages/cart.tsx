import React from "react";
import Link from "next/link";
import Carts from "component/components/Carts";
import { useSelector } from "react-redux";
import { ProductStateType } from "component/types";

export default function Cart() {
  const { cart, amount, totals } = useSelector(
    (state: ProductStateType) => state.product
  );

  if (amount < 1) {
    return (
      <main className="p-4 md:mx-14 text-center ">
        <p className="uppercase my-5 text-center text-[#9A5630]">
          cart is empty
        </p>
      </main>
    );
  }

  return (
    <main className="p-4 md:mx-14">
      <h1 className="uppercase my-5 text-center text-[#9A5630]">Cart items</h1>
      <div>
        {cart.map((c, id) => {
          return <Carts cart={c} key={id} />;
        })}
      </div>
      <footer className="md:flex-row flex-col flex md:justify-between uppercase ">
        <section className="md:w-1/2">
          <div className="flex justify-between items-center">
            <p>Products in cart:</p>
            <p>{amount} items</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Shipping:</p>
            <p>$25</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total:</p>
            <p>${totals + 25}</p>
          </div>
        </section>
        <section className="flex flex-col gap-2 justify-center items-center md:w-1/2">
          <Link
            href="/payment"
            className="bg-secondary text-white p-2 px-4 uppercase"
          >
            proceed to payment
          </Link>
          <Link href="market" className="text-secondary p-2 px-4">
            go to market
          </Link>
        </section>
      </footer>
    </main>
  );
}
