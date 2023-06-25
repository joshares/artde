import React, { useState } from "react";
import Image from "next/image";
import { BsCart } from "react-icons/bs";
import Link from "next/link";
import { SingleProductType } from "component/types";
import demo from "../../public/ads1.png";
import { addToCart, totalCarts } from "component/features/product/productSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type singlePropType = {
  product: SingleProductType;
};

export default function SingleProduct({ product }: singlePropType) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const {
    urls,
    width,
    height,
    alt_description: name,
    likes: price,
    downloads,
    id,
  } = product;

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      setAmount(1);
    }
  };

  const addToCarts = () => {
    dispatch(addToCart(amount) as any);
    dispatch(totalCarts() as any);
    setAmount(1);
    toast.success("Added to cart");
  };
  return (
    <main>
      <div className="md:flex items-center gap-5">
        <section className="md:w-1/2">
          <Image
            src={product?.urls?.full}
            // src={demo}
            width={width}
            height={height}
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
            <button className="p-2 border-r" onClick={handleDecrease}>
              {" "}
              -{" "}
            </button>
            <p>{amount}</p>
            <button
              className="p-2 border-l"
              onClick={() => setAmount(amount + 1)}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <button
            className="flex items-center gap-2 bg-secondary p-2 text-white rounded-md shadow-md"
            onClick={() => addToCarts()}
          >
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
