import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { ProductStateType } from "component/types";

export default function Payment({ handleSubmit }: any) {
  const router = useRouter();
  const { cart, totals } = useSelector(
    (state: ProductStateType) => state.product
  );
  const [email, setEmail] = useState("");

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  if (cart.length < 1) {
    return (
      <main className="md:w-2/3 mx-auto">
        <p className="text-center uppercase p-20">no item to pay for!</p>
      </main>
    );
  }

  return (
    <main className="md:w-2/3 mx-auto">
      <form action="/api/checkouts" method="POST">
        <article className="flex flex-col gap-5">
          <header className=" text-center uppercase my-5">
            <p>billing address</p>
            <hr className="text-secondary bg-secondary" />
          </header>
          <div className="flex items-center justify-between gap-2">
            <label className="uppercase md:w-1/12 w-1/6">state</label>
            <input
              type="text"
              name="state"
              className="w-full outline-none border rounded-md py-1 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label className="uppercase md:w-1/12 w-1/6">city</label>
            <input
              type="text"
              name="city"
              className="w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label className="uppercase md:w-1/12 w-1/6">street</label>
            <input
              type="text"
              name="street"
              className=" 
              w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label className="uppercase md:w-1/12 w-1/6">Zip code</label>
            <input
              type="text"
              name="zipcode"
              className=" 
              w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <label className="uppercase md:w-1/12 w-1/6">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className=" 
              w-full outline-none border rounded-md py-2 pl-3 placeholder:text-[#8094ae]"
            />
          </div>
        </article>
        {/* <section className="flex flex-col gap-5">
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
        </section> */}
        <input type="hidden" name="products" value={totals + 25} />
        {email.length > 8 ? (
          <button
            type="submit"
            role="link"
            className="w-max outline-none border rounded-md  text-white p-2 px-5 bg-secondary  my-5 flex justify-center items-center mx-auto"
          >
            make payment
          </button>
        ) : (
          <button
            disabled
            type="button"
            className="w-max outline-none border rounded-md  text-white p-2 px-5 bg-secondary  my-5 flex justify-center items-center mx-auto opacity-50 cursor-not-allowed"
          >
            make payment
          </button>
        )}
      </form>
    </main>
  );
}
