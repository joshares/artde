import "component/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "component/components/Navbar";
import Footer from "component/components/Footer";
import { store } from "component/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Provider>
    </>
  );
}
