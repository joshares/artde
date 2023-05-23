import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";

export default function Filter() {
  return (
    <main className="w-full class p-4 bg-secondary text-white flex flex-col gap-5 my-5">
      <header className="flex justify-between items-center w-full text-2xl uppercase">
        <p>Filter</p>
        <BsFilterLeft />
      </header>
      <form className="flex">
        <input
          type="text"
          className="w-full  border-none outline-none px-2 text-black rounded-l-md"
          placeholder="type product name"
        />
        <button
          type="submit"
          className="bg-primary
         p-3 rounded-r-md"
        >
          <AiOutlineSearch className="text-black rounded-r-md" />
        </button>
      </form>
      <section>
        <header className="flex justify-between items-center text-xl uppercase">
          <h1>Category</h1>
          <AiOutlineArrowRight />
        </header>
        <ul className="flex flex-col gap-2 p-2 capitalize">
          <li>Animals</li>
          <li>tech</li>
          <li>artist</li>
          <li>deserts</li>
        </ul>
      </section>
      <section className="hidden md:block">
        <header className="flex justify-between items-center text-xl uppercase">
          <h1>Price</h1>
          <AiOutlineArrowRight />
        </header>
        <ul className="flex flex-col gap-2 p-2 capitalize">
          <li>below $10</li>
          <li>below $100</li>
          <li>below $1000</li>
        </ul>
      </section>
    </main>
  );
}
