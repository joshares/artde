import React from "react";

export default function Newsletter() {
  return (
    <main className="bg-primary shadow-md p-8 text-center flex flex-col gap-4 ">
      <h1 className=" text-xl uppercase">Receive our special offer</h1>
      <form className="flex justify-center items-center">
        <input
          type="email"
          placeholder="type your email..."
          className="w-full md:w-96 md:w-27 rounded-l-md p-2 "
        />
        <button
          type="submit"
          className="p-2 px-4 bg-secondary text-white rounded-r-md"
        >
          send
        </button>
      </form>
      <p className="text-[#79809A]">Subscribe to our newsletter</p>
    </main>
  );
}
