import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import socialOne from "../../public/social1.png";
import socialTwo from "../../public/social2.png";
import socialThree from "../../public/social3.png";
import socialFour from "../../public/social4.png";
import socialFive from "../../public/social5.png";
import Image from "next/image";

export default function Social() {
  return (
    <main className="my-5 mt-8">
      <h1 className="text-center my-5 uppercase">Our social networks</h1>
      <section className="md:flex-row md:flex grid grid-cols-2">
        <div className="relative">
          <Image src={socialOne} alt="social" className="w-full h-60" />
          <div className="h-60 flex flex-col gap-5 text-xl text-center bg-secondary opacity-80 text-white absolute top-0 w-full">
            <header className="flex gap-2 items-center justify-center pt-10">
              <AiOutlineHeart />
              <p>14,9800</p>
            </header>
            <p>likes</p>
            <p>#creativeshop</p>
          </div>
        </div>
        <div>
          <Image src={socialTwo} alt="social" className="w-full h-60" />
        </div>
        <div className="hidden md:block ">
          <Image src={socialThree} alt="social" className="w-full h-60" />
        </div>
        <div>
          <Image src={socialFour} alt="social" className="w-full h-60" />
        </div>
        <div>
          <Image src={socialFive} alt="social" className="w-full h-60" />
        </div>
      </section>
    </main>
  );
}
