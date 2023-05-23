import React from "react";
import Link from "next/link";

type headerProp = {
  head: string;
  heading: string;
};

export default function Header({ head, heading }: headerProp) {
  return (
    <main className="bg-primary p-4 my-5">
      <div className="uppercase flex ">
        <Link href="/" className="text-secondary">
          Home{" "}
        </Link>
        <p> /{head}</p>
      </div>
      <p className="text-3xl uppercase">{heading}</p>
    </main>
  );
}
