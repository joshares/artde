import "component/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "component/components/Navbar";
import Footer from "component/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
