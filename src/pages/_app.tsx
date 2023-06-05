import "component/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "component/components/Navbar";
import Footer from "component/components/Footer";
import { store } from "component/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
