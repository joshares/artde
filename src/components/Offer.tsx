import React from "react";
import Image from "next/image";
import frameOne from "../../public/frame1.png";
import frameTwo from "../../public/frame2.png";
import frameThree from "../../public/frame3.png";
import frameFour from "../../public/frame4.png";
import frameFive from "../../public/frame5.png";
import frameSix from "../../public/frame6.png";
import Link from "next/link";

export default function Offer() {
  return (
    <main className="my-5">
      <header>
        <p className="text-xs text-[#9A5630] uppercase text-center">We offer</p>
        <p className="text-center uppercase my-5 font-semibold text-xl ">
          frame,framing,custom arworks
        </p>
      </header>
      <div className="md:flex-row flex flex-col gap-4 h-full">
        <section className="md:w-1/2 w-full flex flex-col gap-4">
          <article className=" flex flex-col md:flex-row w-full gap-4">
            <div className="w-full bg-primary shadow-md">
              <Image
                src={frameOne}
                alt="frame"
                className="w-full md:h-max h-72"
              />
              <div className="flex flex-col gap-1 p-2 px-4">
                <p className="text-xl uppercase">Frame With Mount</p>
                <Link href="/frame" className="font-thin underline text-xs">
                  Explore Our Frames
                </Link>
              </div>
            </div>
            <div className="w-full bg-primary shadow-md">
              <Image
                src={frameTwo}
                alt="frame"
                className="w-full md:h-max h-72"
              />
              <div className="flex flex-col gap-1 p-2 px-4">
                <p className="text-xl uppercase">Frame Without Mount</p>
                <Link href="/frame" className="font-thin underline text-xs">
                  Explore Our Frames
                </Link>
              </div>
            </div>
          </article>
          <article>
            <div className="bg-primary shadow-md">
              <Image
                src={frameThree}
                alt="frame"
                className="w-full md:h-max h-72"
              />
              <div className="flex flex-col gap-1 p-2 px-4">
                <p className="text-xl uppercase">No Mount</p>
                <Link href="/frame" className="font-thin underline text-xs">
                  Explore Our Frames
                </Link>
              </div>
            </div>
          </article>
        </section>
        <section className="md:w-1/2 w-full flex flex-col-reverse gap-4">
          <article className=" flex flex-col md:flex-row w-full h-full gap-4">
            <div className="w-full bg-primary shadow-md h-full">
              <Image
                src={frameFive}
                alt="frame"
                className="w-full md:h-max h-72"
              />
              <div className="flex flex-col gap-1 p-2 px-4">
                <p className="text-xl uppercase">Frame jumble</p>
                <Link href="/frame" className="font-thin underline text-xs">
                  Explore Our Frames
                </Link>
              </div>
            </div>
            <div className="w-full bg-primary shadow-md h-full">
              <Image
                src={frameSix}
                alt="frame"
                className="w-full md:h-max h-72"
              />
              <div className="flex flex-col gap-1 p-2 px-4">
                <p className="text-xl uppercase">Custom made mount</p>
                <Link href="/frame" className="font-thin underline text-xs">
                  Explore Our Frames
                </Link>
              </div>
            </div>
          </article>
          <article className="w-full h-full">
            <div className="bg-primary shadow-md w-full">
              <Image
                src={frameFour}
                alt="frame"
                className="w-full md:h-max h-72"
              />
              <div className="flex flex-col gap-1 p-2 px-4">
                <p className="text-xl uppercase">America Crate</p>
                <Link href="/frame" className="font-thin underline text-xs">
                  Explore Our Frames
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
