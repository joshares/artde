import React from "react";
import PopularProduct from "./PopularProduct";

const data = [1, 2, 3, 4];

export default function Popular() {
  return (
    <main className="my-5 mt-8">
      <header className="my-5">
        <p className="text-sm text-[#9A5630] uppercase text-center my-5 ">
          More to love
        </p>
        <p className="text-center font-semibold text-xl uppercase">
          popular product
        </p>
      </header>
      <section className="md:flex md:flex-row grid grid-cols-2 gap-4">
        {data.map((_, id) => {
          return <PopularProduct key={id} />;
        })}
      </section>
    </main>
  );
}
