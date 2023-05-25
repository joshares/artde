import AboutIntro from "component/components/AboutIntro";
import Header from "component/components/Header";
import Newsletter from "component/components/Newsletter";
import React from "react";

export default function about() {
  return (
    <main className="p-4 md:mx-14">
      <Header head="about" heading="learn more about us" />
      <AboutIntro />
      <Newsletter />
    </main>
  );
}
