import Link from "next/link";
import React from "react";
import { getServerSideProps } from "../../authorization/Authorization";

export default function Custom404() {
  return (
    <div className="flex justify-center items-center flex-col gap-6 ">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="bg-secondary text-white p-2 px-5">
        go home
      </Link>
    </div>
  );
}
