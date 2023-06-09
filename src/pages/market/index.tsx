import React from "react";
import Header from "component/components/Header";
import Filter from "component/components/Filter";
import Newsletter from "component/components/Newsletter";
import Products from "component/components/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "component/features/product/productSlice";
import { ProductStateType } from "component/types";
import { useState, useEffect } from "react";
import { getServerSideProps } from "../../../authorization/Authorization";
import Loading from "component/components/Loading";
import Layout from "../../../Layout";

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
      <main className="mx-auto p-4 md:mx-14 text-center text-2xl mx-">
        <Loading />
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
      <Layout>
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
      </Layout>
    </main>
  );
}

export { getServerSideProps };
