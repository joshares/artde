import React from "react";
import Frame from "./Frame";
import { useSelector } from "react-redux";
import { ProductStateType } from "component/types";
import { ProductType } from "component/types";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function FramesProduct() {
  const { frames } = useSelector((state: ProductStateType) => state.product);
  return (
    <main className="w-full my-5 grid-cols-2 gap-5 grid md:grid-cols-4">
      {frames.map((frame: ProductType, id: number) => {
        return <Frame frame={frame} key={id} />;
      })}
    </main>
  );
}
