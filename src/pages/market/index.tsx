import React from "react";
import Header from "component/components/Header";
import Filter from "component/components/Filter";
import Newsletter from "component/components/Newsletter";
import Products from "component/components/Products";

export default function index() {
  return (
    <main className="p-4 md:mx-14">
      <Header head="market" heading="every product is unique" />
      <section className="w-full flex md:flex-row flex-col gap-5">
        <div className="md:w-1/4">
          <Filter />
        </div>
        <div className="md:w-3/4">
          <Products />
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
