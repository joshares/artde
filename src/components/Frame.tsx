import React, { useState } from "react";
import demo from "../../public/intro.png";
import Image from "next/image";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

export default function Frame() {
  const [love, setLove] = useState<boolean>(false);
  return (
    <main className="w-full shadow-md ">
      <Image src={demo} alt="product" className="w-full h-60 " />
      <div className="flex justify-between  uppercase p-2">
        <p>
          Unique steller <br />
          <span>$56</span>
        </p>
        <button className="bg-secondary p-2 text-white uppercase rounded-md text-xs h-max">
          Add to cart
        </button>
      </div>
    </main>
  );
}
