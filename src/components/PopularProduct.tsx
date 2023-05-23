import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import popular from "../../public/popular1.png";

export default function PopularProduct() {
  return (
    <main className="shadow-md bg-primary">
      <Image src={popular} alt="popular" className="w-full" />
      <div className="flex justify-between p-2 items-start">
        <p className="text-md uppercase font-semibold">
          Magnetic wooden holder <br />
          <span className="text-lg font-normal">NGN 13</span>
        </p>
        <AiOutlineHeart />
      </div>
    </main>
  );
}
