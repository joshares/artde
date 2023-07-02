import React from "react";
import LoginForm from "component/components/LoginForm";
import loginGif from "../../public/loginGif.gif";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function Login() {
  const handleGoggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "https://artde.vercel.app" });
  };
  return (
    <main className="flex md:flex-row flex-col p-10">
      <div className="w-full md:w-1/2 p-20 pt-0 md:block hidden">
        <Image src={loginGif} alt="img" className="w-full" />
      </div>
      <section className="w-full md:w-1/2">
        <div>
          <h1 className="text-2xl mb-10 text-black text-center md:mt-0 mt-10">
            Welcome Back!
          </h1>
          <LoginForm />
          <div className="">
            <div className="border rounded-md shadow-md text-gray-400 font-light text-xs flex items-center px-2 py-1.5 gap-2 cursor-pointer w-max mx-auto">
              <FcGoogle className="sm:text-xs text-2xl" />
              <button
                type="button"
                onClick={handleGoggle}
                className="text-xs font-semibold "
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
        <p className="text-center py-5 text-xs mt-2">
          Don`t have an account?{" "}
          <Link href={"/signup"} className="text-blue-800">
            Sign up
          </Link>
        </p>
      </section>
    </main>
  );
}
