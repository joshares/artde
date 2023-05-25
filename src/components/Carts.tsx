import React from "react";
import Image from "next/image";
import demo from "../../public/framez.jpg";

export default function Carts() {
  return (
    <main className="my-5 flex flex-col md:flex-row gap-5 p-10 border-b-2">
      <div className="md:w-1/2">
        <Image src={demo} alt="demo" className="w-full h-52" />
      </div>
      <section className="md:w-1/2 flex flex-col md:justify-center items-center gap-3 uppercase md:gap-10">
        <div className="flex justify-between w-full ">
          <p>egpyt menas</p>
          <p>cancel</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-3">
            <button> - </button>
            <p>1</p>
            <button> + </button>
          </div>
          <p>$29</p>
        </div>
      </section>
    </main>
  );
}
