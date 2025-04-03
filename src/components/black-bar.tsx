import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeUp from "./animations/fade-up";

const BlackBar = () => {
  return (
    <div className="w-full h-full lg:h-[80px] bg-[#F9F6EF] px-4 py-8">
      <div className="max-w-7xl flex-col lg:flex-row flex items-center justify-between mx-auto h-full gap-5">
        <div className="flex gap-7 items-center px-8 invert-0 lg:hidden">
          <Link href="mailto:prajjwalkumar98@gmail.com">
            <Image src={"/mail-light.svg"} width={36} height={33} alt="mail" />
          </Link>
          <Link href="https://www.linkedin.com/in/prajjwaldesigns/">
            <Image
              src={"/linkedin-light.svg"}
              width={36}
              height={33}
              alt="linkedin"
            />
          </Link>
          <Link href="https://www.behance.net/PrajjwalDesigns">
            <Image
              src={"/behance-light.svg"}
              width={36}
              height={33}
              alt="behance"
            />
          </Link>
        </div>
        <div className=" flex items-center gap-4 lg:flex-row flex-col font-medium mt-3 ">
          <p className=" text-sm text-[#FF667D] lg:hidden">
            Crafted with love 🤍 and lots of chai & coffee ☕
          </p>
          <div className="lg:flex gap-7 items-center px-8 hidden">
            <FadeUp delay={0.4}>
              <Link href="mailto:prajjwalkumar98@gmail.com">
                <Image src={"/mail.svg"} width={36} height={33} alt="mail" />
              </Link>
            </FadeUp>
            <FadeUp delay={0.5}>
              <Link href="https://www.linkedin.com/in/prajjwaldesigns/">
                <Image
                  src={"/linkedin.svg"}
                  width={36}
                  height={33}
                  alt="linkedin"
                />
              </Link>
            </FadeUp>
            <FadeUp delay={0.6}>
              <Link href="https://www.behance.net/PrajjwalDesigns">
                <Image
                  src={"/behance.svg"}
                  width={36}
                  height={33}
                  alt="behance"
                />
              </Link>
            </FadeUp>
          </div>
        </div>
        <p className=" text-sm font-medium hidden lg:block text-[#645577]">
          Crafted with love 🤍 and lots of chai & coffee ☕
        </p>
      </div>
    </div>
  );
};

export default BlackBar;
