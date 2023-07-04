import React, { useState } from "react";
import demo from "../../public/intro.png";
import Image from "next/image";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { ProductType } from "component/types";
import {
  addFrameToCart,
  totalCarts,
} from "component/features/product/productSlice";
import { useDispatch } from "react-redux";

type FramePropType = {
  frame: ProductType;
};

export default function Frame({ frame }: FramePropType) {
  const dispatch = useDispatch();
  const [love, setLove] = useState<boolean>(false);
  const { urls, width, height, alt_description, likes, id } = frame;

  const handleClick = () => {
    dispatch(addFrameToCart({ likes, urls, id, alt_description }) as any);
    dispatch(totalCarts() as any);
  };

  return (
    <main className="w-full shadow-md ">
      <Image
        src={urls.raw}
        width={width}
        height={height}
        alt="product"
        priority
        className="w-full h-60 object-cover"
      />
      <div className="flex justify-between  uppercase p-2">
        <p>
          Unique frame <br />
          <span>${likes}</span>
        </p>
        <button
          onClick={() => handleClick()}
          className="bg-secondary p-2 text-white uppercase rounded-md text-xs h-max"
        >
          Add to cart
        </button>
      </div>
    </main>
  );
}
