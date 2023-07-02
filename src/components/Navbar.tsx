import React from "react";
import { useState } from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { ProductStateType } from "component/types";
import { useSession, signOut } from "next-auth/react";
import { Session } from "next-auth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { amount } = useSelector((store: ProductStateType) => store.product);
  const dispatch = useDispatch();
  const { data: session, status: loading } = useSession();

  const firstName = (session: Session | null) => {
    if (session) {
      const { fullName }: any = session.user;
      const { name }: any = session.user;
      if (fullName) {
        const split = fullName.split(" ");
        return split[0];
      } else if (name) {
        const split = name.split(" ");
        return split[0];
      }
    } else {
      return "user";
    }
  };

  return (
    <main className="relative ">
      <nav className="p-4 md:mx-14 flex justify-between items-center">
        <AiOutlineMenu
          onClick={() => setOpen(!open)}
          className="md:hidden block text-xl"
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
          <p>Welcome {firstName(session)}</p>
          <AiOutlineUser className="md:block hidden" />
          <Link
            href="/cart"
            className="flex items-center p-1 border rounded-md border-black gap-2"
          >
            <CiShoppingCart />
            <p>{amount} items</p>
          </Link>
          {!session && loading === "unauthenticated" && (
            <Link className="md:block hidden" href="/login">
              Login
            </Link>
          )}
          {session && (
            <Link className="md:block hidden" href="/api/auth/signout">
              <p onClick={() => signOut()}>Logout</p>
            </Link>
          )}
        </section>
      </nav>
      {open && (
        <aside className="flex md:hidden absolute w-full z-40 top-0">
          <ul className="w-2/3 p-4 bg-white shadow-md h-screen flex flex-col gap-4 text-xl">
            <Link
              onClick={() => setOpen(!open)}
              href="/"
              className="flex justify-between items-center hover:text-blue-700"
            >
              <p>Home</p>
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
            {!session && loading === "unauthenticated" && (
              <Link href="/login">Login</Link>
            )}
            {session && (
              <Link href="/api/auth/signout">
                <p onClick={() => signOut()}>Logout</p>
              </Link>
            )}
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
