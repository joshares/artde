import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import adsOne from "../../public/ads1.png";
import adsTwo from "../../public/ads2.png";
import adsThree from "../../public/ads3.png";
import adsFour from "../../public/ads4.png";
import Link from "next/link";

export default function Ads() {
  return (
    <main className="mt-10 ">
      <section className="flex flex-col md:gap-0 gap-2 bg-secondary text-white md:flex-row shadow-md">
        <div className="w-full md:w-1/2 md:p-16">
          <Image src={adsOne} alt="ads" className="w-full" />
        </div>
        <div
          className="p-4 text-center md:text-left flex flex-col gap-6 w-full md:w-1/2 md:p-16
        "
        >
          <p className="text-xs uppercase">customers reviews</p>
          <p className="uppercase text-2xl">
            Very high-quality product and remarkable customer service
          </p>
          <div className="flex gap-1 text-[#E0B264] text-sm items-center md:justify-start justify-center">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <p className="text-sm text-white uppercase">1307 reviews</p>
          </div>
          <div className="flex gap-2 text-xl items-start">
            <FaQuoteLeft className="text-5xl md:block hidden -mt-4" />
            <p>
              A wide range of products, fast delivery and availability times;
              Finally, the customer service is remarkable and responsive
            </p>
          </div>
          <Link
            href="/about"
            className=" flex gap-2 items-center capitalize md:justify-start justify-center hover:text-blue-300"
          >
            <p>about the company</p>
            <MdOutlineKeyboardArrowRight />
          </Link>
        </div>
      </section>
      <section className="my-5 md:relative shadow-md">
        <Image src={adsTwo} alt="ads" className="w-full h-64 md:h-max" />
        <div className=" flex md:flex-row flex-col gap-8 text-center md:text-left pt-5  bg-primary shadow-md p-6 md:p-10 md:py-20  md:absolute bottom-0 md:w-1/2">
          <p className="text-3xl uppercase md:w-1/2">
            Artde, the specialist in custom framing
          </p>
          <p className="text-xl md:w-1/2">
            Thanks to an innovative website, customers can design unique
            products, compare, and test the rendering as if they were in the
            creative workshop
          </p>
        </div>
      </section>
      <section className="my-5 md:relative shadow-md">
        <Image src={adsThree} alt="ads" className="w-full h-64 md:h-max" />
        <div className=" flex md:flex-row flex-col gap-8 text-center md:text-left pt-5  bg-secondary text-white shadow-md p-6 md:p-10 md:py-16  md:absolute bottom-0 right-0 md:w-1/2">
          <p className="text-3xl uppercase md:w-1/2">
            Unique and exclusive creations
          </p>
          <p className="text-xl md:w-1/2">
            The website is very user-friendly, whether you are using it from
            your phone, tablet, or computer. You just need to follow the
            proposed steps and provide the desired information
          </p>
        </div>
      </section>
      <section className="my-5 md:relative shadow-md">
        <Image src={adsTwo} alt="ads" className="w-full h-64 md:h-max" />
        <div className=" flex md:flex-row flex-col gap-8 text-center md:text-left pt-5  bg-primary shadow-md p-6 md:p-10 md:py-12  md:absolute bottom-0 md:w-1/2">
          <p className="text-3xl uppercase md:w-1/2">
            The human is the DNA of the company
          </p>
          <p className="text-lg md:w-1/2">
            In order to offer a complete experience, the subject matter experts
            at ArtDeCadre.fr, remaining true to the origins of the company, are
            available by phone or email to answer questions, provide
            personalized advice, and guide through the creation process
          </p>
        </div>
      </section>
    </main>
  );
}
