import React, { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  priceRange,
  searchProducts,
} from "component/features/product/productSlice";

export default function Filter() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const dispatch = useDispatch();
  return (
    <main className="w-full class p-4 bg-secondary text-white flex flex-col gap-5 my-5 md:sticky md:top-0">
      <header className="flex justify-between items-center w-full text-2xl uppercase">
        <p>Filter</p>
        <BsFilterLeft />
      </header>
      <form className="flex">
        <input
          value={search}
          onChange={handleChange}
          type="text"
          className="w-full  border-none outline-none px-2 text-black rounded-l-md rounded-r-none"
          placeholder="type product name"
        />
        <button
          type="submit"
          className="bg-primary
         p-3 rounded-r-md"
          onClick={() => dispatch(searchProducts(search) as any)}
        >
          <AiOutlineSearch className="text-black rounded-r-md" />
        </button>
      </form>
      <section>
        <header className="flex justify-between items-center text-xl uppercase">
          <h1>Category</h1>
          <AiOutlineArrowRight />
        </header>
        <ul className="flex flex-col gap-2 p-2 capitalize  ">
          <button
            className="text-left w-max"
            onClick={() => dispatch(searchProducts("animal") as any)}
          >
            Animals
          </button>
          <button
            className="text-left w-max"
            onClick={() => dispatch(searchProducts("tech") as any)}
          >
            Tech
          </button>
          <button
            className="text-left w-max"
            onClick={() => dispatch(searchProducts("artist") as any)}
          >
            Artist
          </button>
          <button
            className="text-left w-max"
            onClick={() => dispatch(searchProducts("sport") as any)}
          >
            Sports
          </button>
        </ul>
      </section>
      <section className="hidden md:block">
        <header className="flex justify-between items-center text-xl uppercase">
          <h1>Price</h1>
          <AiOutlineArrowRight />
        </header>
        <ul className="flex flex-col gap-2 p-2 capitalize items-start">
          <button onClick={() => dispatch(priceRange(100))}>below $100</button>
          <button onClick={() => dispatch(priceRange(500))}>below $500</button>
          <button onClick={() => dispatch(priceRange(1000))}>
            below $1000
          </button>
        </ul>
      </section>
    </main>
  );
}
