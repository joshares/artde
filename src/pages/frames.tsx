import FramesProduct from "component/components/FramesProduct";
import Header from "component/components/Header";
import Newsletter from "component/components/Newsletter";
import { getFrames } from "component/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { ProductStateType } from "component/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getServerSideProps } from "../../authorization/Authorization";
import Loading from "component/components/Loading";

export default function Frames() {
  const dispatch = useDispatch();
  const { frame_loading: loading, frame_error: error } = useSelector(
    (state: ProductStateType) => state.product
  );
  useEffect(() => {
    dispatch(getFrames() as any);
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
    <main className="p-4 md:mx-14">
      <Header head="frames" heading="every frame is uniques" />
      <FramesProduct />
      <Newsletter />
    </main>
  );
}

export { getServerSideProps };
