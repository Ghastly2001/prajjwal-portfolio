"use client";
import Image from "next/image";
import React from "react";
import FadeUp from "./animations/fade-up";

const SubHero = () => {
  return (
    <div className="bg-[#645577] h-full lg:h-[600px] py-20 flex items-center justify-center relative">
      <Image
        src={"/new/half-ellipse.svg"}
        className="w-[151px] h-[153px] absolute left-[15%] -top-[38.5px] hidden lg:block"
        alt="ellipse"
        width={56}
        height={56}
      />
      <Image
        src={"/new/ellipse.svg"}
        className="w-[151px] h-[153px] absolute bottom-[15%] right-[41px] hidden lg:block"
        alt="ellipse"
        width={56}
        height={56}
      />
      <div className="flex flex-col items-center justify-between h-full gap-7  px-8  lg:px-0">
        <div className="flex flex-col items-start lg:items-center justify-center h-full gap-7">
          <FadeUp className="flex flex-row lg:flex-col items-center justify-center h-full gap-2 lg:gap-7 -ml-2 lg:ml-0">
            <Image
              src={"/bulb.svg"}
              className="w-10 h-10 md:w-16 md:h-16"
              alt="contact"
              width={56}
              height={56}
            />

            <h1 className="text-xl sm:text-3xl font-semibold text-start lg:text-center text-[#F9F6EF]">
              Exploring, Experimenting, Evolving
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="max-w-[730px] text-start lg:text-center font-gilroy lg:text-base lg:leading-[32px] max-sm:leading-[32px] max-sm:text-base text-[#F9F6EF] font-medium">
              Seasoned with <span className="font-bold">3.5 years</span> of my
              institute exposure as a{" "}
              <span className="font-bold">Product-Experience designer.</span>{" "}
              I&apos;ve worked with various brands encompassing in Fashion,
              Healthcare, Insurtech, Manufacturing, E-commerce and more. Be it{" "}
              website, apps my learn-it-all attitude and creative mindset drives
              me to create prototypes that resonate with users and drive
              success.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <p className="text-start lg:text-center max-sm:text-base text-[#F9F6EF] font-gilroy font-medium">
              Recently, crafted my experiences at{" "}
              <span
                className="text-[#FF667D] font-medium cursor-pointer"
                onClick={() => window.open("https://ondc.org/")}
              >
                ONDC.
              </span>
            </p>
          </FadeUp>
        </div>
        <FadeUp
          className="lg:flex flex-col items-center justify-center py-3 hidden font-gilroy"
          delay={0.2}
        >
          <button
            className="border border-[#FF667D] lg:py-3.5 py-3 px-10 rounded-full font-bold bg-[#FF667D] hover:bg-transparent text-[#F9F6EF] hover:text-[#FF667D] transition-all w-full lg:w-auto text-center"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/prajjwaldesigns",
                "_blank"
              )
            }
          >
            Check My Linkedin
          </button>
        </FadeUp>
      </div>
    </div>
  );
};

export default SubHero;
