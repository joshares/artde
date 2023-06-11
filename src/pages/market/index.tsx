import React from "react";
import Header from "component/components/Header";
import Filter from "component/components/Filter";
import Newsletter from "component/components/Newsletter";
import Products from "component/components/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "component/features/product/productSlice";
import { ProductStateType } from "component/types";

export default function Market() {
  const {
    filtered_products,
    product_loading: loading,
    product_error: error,
  } = useSelector((state: ProductStateType) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <main className="mx-auto p-4 md:mx-14">
        <p className="text-center text-3xl">Loading...</p>
      </main>
    );
  }
  if (error) {
    return (
      <main className="mx-auto p-4 md:mx-14">
        <p className="text-center text-3xl">Error...</p>
      </main>
    );
  }

  return (
    <main className="p-4 md:mx-14 ">
      <Header head="market" heading="every product is unique" />
      <section className="w-full flex md:flex-row flex-col gap-5">
        <div className="md:w-1/4 ">
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
