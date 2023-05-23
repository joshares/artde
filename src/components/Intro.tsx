import React from "react";
import Image from "next/image";
import intro from "../../public/intro.png";
import { RiArrowDropRightLine } from "react-icons/ri";

export default function Intro() {
  return (
    <main className="w-full flex md:flex-row flex-col-reverse shadow-md ">
      <div className="md:w-1/2 full bg-primary  p-14 flex flex-col gap-4 md:text-left text-center">
        <p className="text-3xl font-semibold uppercase ">
          Custom arts and framework everything you like
        </p>
        <p>
          Custom-made in Africa according to your exact specifications with
          ultra-fast manufacturing and delivery.
        </p>
        <div className="flex items-center gap-4 text-blue-700 md:justify-start justify-center">
          <p>Design a custom frame for me</p>
          <RiArrowDropRightLine className="text-xl" />
        </div>
      </div>
      <div className="md:w-1/2 full">
        <Image src={intro} alt="intro" className="w-full h-full" />
      </div>
    </main>
  );
}
