import React from "react";
import Payments from "component/components/Payment";
import Newsletter from "component/components/Newsletter";

export default function Payment() {
  return (
    <main className="mx-auto p-4 md:mx-14">
      <Payments />
      <Newsletter />
    </main>
  );
}
