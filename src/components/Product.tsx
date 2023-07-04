import React, { useState } from "react";
import demo from "../../public/intro.png";
import Image from "next/image";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import { ProductType } from "component/types";

type ProductPropType = {
  product: ProductType;
};

export default function Product({ product }: ProductPropType) {
  const {
    urls,
    width,
    height,
    alt_description: name,
    likes: price,
    id,
  } = product;
  const [love, setLove] = useState<boolean>(false);

  return (
    <main className="w-full shadow-md ">
      <Link href={`market/${id}`}>
        <Image
          src={product?.urls.full}
          width={width}
          height={height}
          alt="product"
          priority
          className="w-full h-60 object-cover "
        />
      </Link>
      <div className="flex justify-between  uppercase p-2 ">
        <div className="w-5/6   ">
          <p>{name}</p>
          <p className="font-semibold">${price}</p>
        </div>
        {love ? (
          <AiTwotoneHeart
            className="text-red-700 text-xl"
            onClick={() => setLove(!love)}
          />
        ) : (
          <AiOutlineHeart className="text-xl" onClick={() => setLove(!love)} />
        )}
      </div>
    </main>
  );
}
