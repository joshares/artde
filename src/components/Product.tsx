import React, { useState } from "react";
import demo from "../../public/intro.png";
import Image from "next/image";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";

export default function Product() {
  const [love, setLove] = useState<boolean>(false);
  return (
    <main className="w-full shadow-md ">
      <Image src={demo} alt="product" className="w-full h-60 " />
      <div className="flex justify-between text-xl uppercase p-2">
        <p>
          Unique steller <br />
          <span>$56</span>
        </p>
        {love ? (
          <AiTwotoneHeart
            className="text-red-700"
            onClick={() => setLove(!love)}
          />
        ) : (
          <AiOutlineHeart onClick={() => setLove(!love)} />
        )}
      </div>
    </main>
  );
}
