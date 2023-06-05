import React from "react";
import Image from "next/image";
import demo from "../../public/ads2.png";
import { BsCart } from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ProductStateType, SingleProductType } from "component/types";
import { ProductType } from "component/types";

type singlePropType = {
  product: SingleProductType;
};

export default function SingleProduct({ product }: singlePropType) {
  // const { single_product: product } = useSelector(
  // (state: ProductStateType) => state.product
  // );
  const {
    urls,
    width,
    height,
    alt_description: name,
    likes: price,
    downloads,
    id,
  } = product;

  return (
    <main>
      <div className="md:flex items-center gap-5">
        <section className="md:w-1/2">
          <Image
            src={urls?.full}
            // src={demo}
            width={800}
            height={800}
            alt="demo"
            className="w-full h-72"
          />
        </section>
        <section className=" my-5 flex flex-col gap-4 justify-center items-center md:w-1/2 md:justify-normal md:items-start md:my-0 md:h-72">
          <p className="uppercase font-bold text-2xl text-center md:text-left ">
            {name}
          </p>
          <p className="text-2xl font-bold">${price}</p>
          <p className="text-2xl font-bold">{downloads} Likes</p>

          <div className="flex gap-2 items-center  justify-center w-max border ">
            <button className="p-2 border-r"> - </button>
            <p>1</p>
            <button className="p-2 border-l"> + </button>
          </div>
          <button className="flex items-center gap-2 bg-secondary p-2 text-white rounded-md shadow-md">
            <BsCart />
            <p>Add to cart</p>
          </button>
        </section>
      </div>
      <footer className="flex justify-center my-5 mt-10">
        <Link
          href="/market"
          className="text-center animate-pulse text-sm uppercase "
        >
          view more...
        </Link>
      </footer>
    </main>
  );
}
