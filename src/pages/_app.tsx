import "component/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "component/components/Navbar";
import Footer from "component/components/Footer";
import { store } from "component/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, router }: AppProps) {
  const isLoginPage =
    router.pathname === "/login" || router.pathname === "/signup";
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {!isLoginPage && <Navbar />}
        <Component {...pageProps} />
        {!isLoginPage && <Footer />}
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
    </SessionProvider>
  );
}
