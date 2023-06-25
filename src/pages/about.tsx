import React, { useEffect, useState } from "react";
import AboutIntro from "component/components/AboutIntro";
import Header from "component/components/Header";
import Newsletter from "component/components/Newsletter";
import { useRouter } from "next/router";
import { getServerSideProps } from "../../authorization/Authorization";

export default function About() {
  const [load, setLoad] = useState(true);
  const router = useRouter();

  return (
    <main className="p-4 md:mx-14">
      <Header head="about" heading="learn more about us" />
      <AboutIntro />
      <Newsletter />
    </main>
  );
}

export { getServerSideProps };
