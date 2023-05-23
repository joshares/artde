import React from "react";
import Product from "./Product";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Products() {
  return (
    <main className="w-full flex my-5 flex-col gap-5 md:grid grid-cols-3">
      {data.map((d, id) => {
        return <Product key={id} />;
      })}
    </main>
  );
}
