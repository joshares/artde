import React from "react";

export default function Payment() {
  return (
    <main className="md:w-2/3 mx-auto">
      <form>
        <article className="flex flex-col gap-5">
          <header className=" text-center uppercase my-5">
            <p>billing address</p>
            <hr className="text-secondary bg-secondary" />
          </header>
          <div className="flex items-center gap-2">
            <label className="uppercase">country</label>
            <input
              type="text"
              name="country"
              className="w-full outline-none border rounded-md py-1 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="uppercase">address</label>
            <input
              type="text"
              name="address"
              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
        </article>
        <section className="flex flex-col gap-5">
          <header className=" text-center uppercase my-5">
            <p>Card details</p>
            <hr className="text-secondary bg-secondary" />
          </header>
          <input
            type=""
            placeholder="Card Number"
            className="w-full 
            appearance-none outline-none border rounded-md py-2 pl-3
             placeholder:text-[#8094ae]"
          />
          <div className="flex gap-5  ">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            />
            <input
              type="text"
              placeholder="cvv"
              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
          <input
            type="password"
            placeholder="pin"
            className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
          />
        </section>
        <button
          type="submit"
          className="w-max outline-none border rounded-md  text-white p-2 px-5 bg-secondary  my-5 flex justify-center items-center mx-auto"
        >
          make payment
        </button>
      </form>
    </main>
  );
}
