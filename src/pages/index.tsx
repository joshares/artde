import Ads from "component/components/Ads";
import Icon from "component/components/Icon";
import Intro from "component/components/Intro";
import Newsletter from "component/components/Newsletter";
import Offer from "component/components/Offer";
import Popular from "component/components/Popular";
import Social from "component/components/Social";

export default function Home() {
  return (
    <main className="p-4 md:mx-14">
      <Intro />
      <Icon />
      <Offer />
      <Popular />
      <Ads />
      <Newsletter />
      <Social />
    </main>
  );
}
