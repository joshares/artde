import React from "react";
import Frame from "./Frame";
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function FramesProduct() {
  return (
    <main className="w-full my-5 grid-cols-2 gap-5 grid md:grid-cols-4">
      {data.map((d, id) => {
        return <Frame key={id} />;
      })}
    </main>
  );
}
