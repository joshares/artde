import React from "react";
import Payments from "component/components/Payment";
import Newsletter from "component/components/Newsletter";
import { getServerSideProps } from "../../authorization/Authorization";
import { useRouter } from "next/router";

import { toast } from "react-toastify";

export default function Payment() {
  const router = useRouter();
  const handleSubmit = () => {
    toast.success("Order successful");
    router.push("/");
  };
  return (
    <main className="mx-auto p-4 md:mx-14">
      <Payments handleSubmit={handleSubmit} />
      {/* <button onClick={handleClick}>make payment</button> */}
      <Newsletter />
    </main>
  );
}

export { getServerSideProps };
