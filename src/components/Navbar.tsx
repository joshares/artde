import React from "react";
import { useState } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <main className="relative ">
      <nav className="p-4 md:mx-14 flex justify-between items-center">
        <AiOutlineMenu
          onClick={() => setOpen(!open)}
          className="md:hidden block"
        />
        <h1 className="text-xl uppercase font-bold">artde</h1>
        <ul className="md:flex items-center md:flex-row gap-12 hidden">
          <li>
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link href="/market" className="">
              Market
            </Link>
          </li>
          <li>
            <Link href="/frames" className="">
              Frames
            </Link>
          </li>
          <li>
            <Link href="/about" className="">
              About
            </Link>
          </li>
        </ul>
        <section className="flex items-center gap-4 ">
          <AiOutlineUser />
          <Link
            href="/cart"
            className="flex items-center p-1 border rounded-md border-black gap-2"
          >
            <CiShoppingCart />
            <p>0 items</p>
          </Link>
          <button>Login</button>
        </section>
      </nav>
      {open && (
        <aside className="flex md:hidden absolute w-full top-0">
          <ul className="w-2/3 p-4 bg-white shadow-md h-screen flex flex-col gap-4">
            <Link
              onClick={() => setOpen(!open)}
              href="/"
              className="flex justify-between items-center hover:text-blue-700"
            >
              <p>home</p>
              <MdOutlineKeyboardArrowRight />
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              href="/market"
              className="flex justify-between items-center hover:text-blue-700"
            >
              <p>Market</p>
              <MdOutlineKeyboardArrowRight />
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              href="/frames"
              className="flex justify-between items-center hover:text-blue-700"
            >
              <p>Frames</p>
              <MdOutlineKeyboardArrowRight />
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              href="/about"
              className="flex justify-between items-center hover:text-blue-700"
            >
              <p>About</p>
              <MdOutlineKeyboardArrowRight />
            </Link>
          </ul>
          <div
            className="bg-black w-1/3 opacity-40"
            onClick={() => setOpen(!open)}
          ></div>
        </aside>
      )}
    </main>
  );
}
