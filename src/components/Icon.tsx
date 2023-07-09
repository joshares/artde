import React from "react";
import Image from "next/image";
import plane from "../../public/plane.png";
import heart from "../../public/heart.png";
import { motion } from "framer-motion";
import tape from "../../public/tape.png";

export default function Icon() {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const icons = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <main className="my-5 flex md:flex-row md:justify-between flex-col gap-5 md:p-8 md:px-16  justify-items-center  items-center ">
      <motion.section
        variants={variants}
        initial="hidden"
        animate="show"
        className="md:w-2/3 flex w-full p-4 justify-between md:px-16"
      >
        <motion.div
          variants={icons}
          className="flex flex-col gap-2 items-center"
        >
          <Image src={plane} alt="plane" />
          <p className="text-center">
            Delivery time 3-5 business days <br />
            <span>Free shipping</span>
          </p>
        </motion.div>
        <motion.div
          variants={icons}
          className="flex flex-col gap-2 items-center"
        >
          <Image src={heart} alt="plane" />
          <p className="text-center">
            +55,000 clients trust <br />
            <span>CreativeShop</span>
          </p>
        </motion.div>
      </motion.section>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="md:w-2/5"
      >
        <motion.div
          variants={icons}
          className="flex flex-col gap-2 items-center  "
        >
          <Image src={plane} alt="plane" />
          <p className="text-center">
            French manufacturing Made <br />
            <span>with passion</span>
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
