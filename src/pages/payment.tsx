import React, { useEffect } from "react";
import Payments from "component/components/Payment";
import Newsletter from "component/components/Newsletter";
import { getServerSideProps } from "../../authorization/Authorization";
import { useRouter } from "next/router";

export default function Payment() {
  return (
    <main className="mx-auto p-4 md:mx-14">
      <Payments />
      <Newsletter />
    </main>
  );
}

export { getServerSideProps };
