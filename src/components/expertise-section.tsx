import Image from "next/image";
import React from "react";
import FadeUp from "./animations/fade-up";

const ExpertiseSection = () => {
  return (
    <div className="bg-[#645577] h-full w-full max-sm:px-4 max-sm:py-20 flex flex-col items-center justify-center lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-10 w-full">
        {/* Mobile Video */}
        <FadeUp
          delay={0.05}
          className="w-full flex justify-center lg:hidden mb-8"
        >
          <video
            src="/desktop_assets/homepage/software-icons.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[240px] h-auto rounded-md"
          />
        </FadeUp>

        {/* Top Section */}
        <div className="relative w-full flex flex-col lg:flex-row lg:h-[200px] items-start lg:items-center">
          <div className="w-full mb-auto flex flex-col gap-4">
            {/* Desktop Heading */}
            <FadeUp>
              <h1 className="font-bold text-xl lg:text-3xl w-full hidden lg:block text-[#F9F6EF] lg:leading-[42px]">
                Skilled in industry-leading software,
                <br /> I have <span className="text-[#FF667D]">
                  expertise
                </span>{" "}
                in these tools.
              </h1>
            </FadeUp>

            {/* Mobile Heading */}
            <FadeUp>
              <h1 className="font-bold text-xl lg:text-3xl w-full lg:hidden text-[#F9F6EF]">
                Skilled in industry-leading software, I have{" "}
                <span className="text-[#FF667D]">expertise</span> in these
                tools.
              </h1>
            </FadeUp>

            {/* Description */}
            <FadeUp delay={0.1}>
              <p className="text-sm text-[#F9F6EF] w-full tracking-wider leading-[28px] font-gilroy">
                From creating wireframes and prototypes to high-fidelity mockups
                and animations, I blend design tools and fashion insights to
                bring my creations to life.
              </p>
            </FadeUp>
          </div>

          {/* Desktop Video */}
          <FadeUp
            delay={0.1}
            className="w-[500px] h-[400px] mt-60 hidden lg:block"
          >
            <video
              src="/desktop_assets/homepage/software-icons.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-md"
            />
          </FadeUp>
        </div>

        {/* Tools Section */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between lg:gap-10 gap-8 mt-12 lg:mt-0">
          {/* Figma */}
          <FadeUp>
            <div className="flex flex-row lg:flex-col gap-4">
              <Image
                src={"/figma.svg"}
                width={36}
                height={36}
                alt="figma"
                className="h-1/2 hidden lg:block invert"
              />
              <Image
                src={"/figma-mobile.svg"}
                width={23}
                height={35}
                alt="figma"
                className="h-1/2 lg:hidden block invert mt-2"
              />
              <div className="flex flex-col gap-2 lg:gap-4">
                <h1 className="font-bold text-xl text-[#F9F6EF]">Figma</h1>
                <p className="text-[#F9F6EF] leading-[28px] text-sm font-gilroy">
                  3+ years of experience with Figma, I&apos;m now pretty much a
                  pro (or close enough)!
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Adobe Suite */}
          <FadeUp delay={0.1}>
            <div className="flex flex-row lg:flex-col gap-4">
              <Image
                src={"/adobe-suite.svg"}
                width={64}
                height={64}
                alt="adobe"
                className="h-1/2 hidden lg:block invert"
              />
              <Image
                src={"/adobe-mobile.svg"}
                width={23}
                height={35}
                alt="adobe"
                className="h-1/2 lg:hidden block invert mt-2"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-xl text-[#F9F6EF]">
                  Adobe Suite
                </h1>
                <p className="text-[#F9F6EF] leading-[28px] text-sm font-gilroy">
                  Using adobe suite for last 3+ years. Fav: Illustrator,
                  Photoshop, InDesign, XD.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Miro */}
          <FadeUp delay={0.2}>
            <div className="flex flex-row lg:flex-col gap-4">
              <Image
                src={"/miro.svg"}
                width={60}
                height={60}
                alt="miro"
                className="h-1/2 hidden lg:block invert"
              />
              <Image
                src={"/miro-mobile.svg"}
                width={23}
                height={35}
                alt="miro"
                className="h-1/2 lg:hidden block invert mt-2"
              />
              <div className="flex flex-col gap-1 lg:gap-4">
                <h1 className="font-bold text-xl text-[#F9F6EF]">Miro</h1>
                <p className="text-[#F9F6EF] leading-[28px] text-sm font-gilroy">
                  I am an expert in using Miro. Knowledge of JIRA as well.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
