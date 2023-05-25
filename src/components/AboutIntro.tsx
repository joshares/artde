import React from "react";
import demo from "../../public/social1.png";
import framzOne from "../../public/framez.jpg";
import framzTwo from "../../public/framez2.jpg";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <main className="my-5">
      <section className="flex md:flex-row flex-col gap-2 ">
        <article className="md:w-1/2 p-8">
          <h1 className="uppercase text-xl font-bold">Hello we are Artde</h1>
          <p className="mt-10 text-xl">
            The company CreativeShop is an African enterprise specialized in the
            field of framing, decoration, signage, and related articles. We
            orchestrate the creation, manufacturing, and distribution.
          </p>
        </article>
        <article className="md:w-1/2 relative">
          <Image src={demo} alt="demo" className="w-full h-72" />
          <div className="h-72 bg-secondary opacity-80 text-white absolute top-0 w-full text-center p-8">
            <h1 className="text-xl uppercase">
              Our products are sold through our thematic websites
            </h1>
            <ul className="grid grid-cols-2 gap-5 mt-5 ">
              <li>Artencouter.com</li>
              <li>Artencouter.com</li>
              <li>Artencouter.com</li>
              <li>Artencouter.com</li>
              <li>Artencouter.com</li>
              <li>Artencouter.com</li>
              <li>Artencouter.com</li>
              <li>Artencouter.com</li>
            </ul>
          </div>
        </article>
      </section>
      <section className="flex md:flex-row flex-col gap-3 my-5 ">
        <article className="md:w-1/2">
          <Image src={framzOne} alt="frame" className="w-full h-72" />{" "}
        </article>
        <article className="md:w-1/2 relative flex flex-col gap-4 ">
          <header className="">
            <p className="text-xs uppercase text-[#9A5630]">Our expertise</p>
            <p className="text-2xl font-semibold">Our expertise</p>
          </header>
          <p>
            Our production workshops are equipped with high-performance machines
            using advanced technologies. They allow us to meet all types of
            requests (customized, standard) and volumes (from 1 piece to 10,000
            and beyond) and to design value-added products. We are capable of
            creating and manufacturing all your projects. Our design office is
            at your disposal for personalized advice.
          </p>
          <p>
            Customer satisfaction is our priority. The industry experts at the
            manufacturing facility are available every day by phone or email to
            answer your questions. Their expertise provides valuable insights.
            Do not hesitate to rely on their experience when placing your
            orders.
          </p>
        </article>
      </section>
      <section className="flex md:flex-row-reverse flex-col-reverse gap-3 my-5 ">
        <article className="md:w-1/2">
          <Image src={framzTwo} alt="frame" className="w-full h-72" />{" "}
        </article>
        <article className="md:w-1/2 relative flex flex-col gap-6 ">
          <header className="flex flex-col gap-3">
            <p className="text-xs uppercase text-[#9A5630]">
              Different domains
            </p>
            <p className="text-2xl font-semibold">Our client? Very eclectic</p>
          </header>
          <p>
            Professionals & the general public: photographers, individuals,
            painters, architects, hotels, public organizations, community
            organizations, decoration stores, communication agencies, sports
            clubs, museums, industrial sector, galleries, applied art schools,
            designers, automotive dealerships, banks, trend agencies, creative
            studios, haute couture mansions.
          </p>
        </article>
      </section>
    </main>
  );
}
