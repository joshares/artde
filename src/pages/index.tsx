import Ads from "component/components/Ads";
import Icon from "component/components/Icon";
import Intro from "component/components/Intro";
import Newsletter from "component/components/Newsletter";
import Offer from "component/components/Offer";
import Popular from "component/components/Popular";
import Social from "component/components/Social";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { getServerSideProps } from "../../authorization/Authorization";
import { toast } from "react-toastify";
import Layout from "../../Layout";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [load, setLoad] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast.success("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      toast.error("Order canceled");
    }
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     const windowHeight = window.innerHeight;

  //     if (scrollTop > windowHeight * 0.1) {
  //       setVisible(true);
  //     } else {
  //       setVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <main className="p-4 md:mx-14">
      <Layout>
        <Intro />
        <Icon />
        <Offer />
        {/* <Popular /> */}
        <Ads />
        <Newsletter />
        <Social />
      </Layout>
    </main>
  );
}

export { getServerSideProps };
