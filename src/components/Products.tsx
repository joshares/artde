import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { ProductStateType } from "component/types";
import { ProductType } from "component/types";

export default function Products() {
  const { filtered_products: products } = useSelector(
    (state: ProductStateType) => state.product
  );

  if (products.length < 1) {
    return (
      <main className="w-full text-center text-xl uppercase my-5">
        <p className="text-center"> No item found, try searching.</p>
      </main>
    );
  }

  return (
    <main className="w-full flex my-5 flex-col gap-5 md:grid grid-cols-3">
      {products.map((product: ProductType, i: number) => {
        return <Product product={product} key={i} />;
      })}
    </main>
  );
}
