import FramesProduct from "component/components/FramesProduct";
import Header from "component/components/Header";
import Newsletter from "component/components/Newsletter";
import React from "react";

export default function frames() {
  return (
    <main className="p-4 md:mx-14">
      <Header head="frames" heading="every frame is uniques" />
      <FramesProduct />
      <Newsletter />
    </main>
  );
}
