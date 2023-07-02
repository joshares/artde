import React from "react";
import Link from "next/link";
import shop from "../../public/shop.png";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="bg-primary py-8 px-4 md:px-14">
      <section className="flex md:flex-row justify-between flex-col gap-10">
        <ul className="md:w-1/4 flex flex-col gap-5  items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl">CreativeShop</h1>
          <li>Creation.Fabrication.Distribution</li>
          <li>
            The website Artde is a website of the CreativeShop group, an African
            company with a custom frame and matting manufacturing facility.
          </li>
          <Link href="/about" className="underline text-blue-800">
            Learn more
          </Link>
        </ul>
        <ul className="md:w-1/4 flex flex-col gap-2  items-center text-center md:items-start md:text-left capitalize">
          <h1 className="text-xl uppercase ">Information</h1>
          <li>delivery</li>
          <li>payment methods</li>
          <li>Terms of sale</li>
          <Link href="/about" className="text-blue-800 underline">
            About us
          </Link>
        </ul>
        <ul className="md:w-1/4 flex flex-col gap-2  items-center text-center md:items-start md:text-left capitalize">
          <h1 className="text-xl uppercase ">Others</h1>
          <li>suspension rails</li>
          <li>snaps frames</li>
          <li>jersay frame</li>
          <li>magnectic products</li>
        </ul>
        <ul className="md:w-1/4 flex flex-col gap-2  items-center text-center md:items-start md:text-left capitalize">
          <h1 className="text-xl uppercase ">contacts</h1>
          <li>Tel: 08068126344</li>
          <li>email: joshares9991@gmail.com</li>
          <li>Address: Lagos, Nigeria.</li>
        </ul>
      </section>
      <footer className="flex md:flex-row flex-col mt-8 justify-between text-[#65707D] border-t border-t-[#65707D]">
        <div className="flex flex-row items-center w-1/2">
          <Image src={shop} alt="shop" className=" bg-primary" />
          <p>Copyright2023.Artde</p>
        </div>
        <p>Good discovery of our universes! All the customization support!</p>
      </footer>
    </main>
  );
}
