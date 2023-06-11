import Ads from "component/components/Ads";
import Icon from "component/components/Icon";
import Intro from "component/components/Intro";
import Newsletter from "component/components/Newsletter";
import Offer from "component/components/Offer";
import Popular from "component/components/Popular";
import Social from "component/components/Social";
import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export default function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      if (scrollTop > windowHeight * 0.1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="p-4 md:mx-14">
      <Intro />
      <Icon />
      <Transition
        show={visible}
        enter="transition duration-1000 transform"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-500 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
      >
        <Offer />
      </Transition>
      <Popular />
      <Ads />
      <Newsletter />
      <Social />
    </main>
  );
}
