import React from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import SingleProduct from "component/components/SingleProduct";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ProductStateType } from "component/types";
import { useEffect } from "react";
import { singlePage } from "component/features/product/productSlice";
import { getServerSideProps } from "../../../authorization/Authorization";
import Loading from "component/components/Loading";

export default function SingleProducts() {
  const router = useRouter();
  const id = router.query.productId as string;
  const {
    single_loading: loading,
    single_error: error,
    single_product: product,
  } = useSelector((state: ProductStateType) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePage(id) as any);
    console.log(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return (
      <main className="mx-auto p-4 md:mx-14 text-center text-2xl mx-">
        <Loading />
      </main>
    );
  }
  if (error) {
    return (
      <main className="text-center text-3xl">
        <p>error</p>
        <Link href="/market">Go back</Link>
      </main>
    );
  }
  return (
    <main className="p-4 md:mx-14">
      <Link
        href="/market"
        className="my-5 flex items-center gap-2 bg-primary shadow-md rounded-md w-max p-2"
      >
        <BsArrowLeft />
        <p>Back to market</p>
      </Link>
      <SingleProduct product={product} />
    </main>
  );
}

export { getServerSideProps };
