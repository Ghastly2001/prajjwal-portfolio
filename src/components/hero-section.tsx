"use client";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "./animations/fade-up";

const HeroSection = () => {
  return (
    <div className="h-screen lg:h-[calc(100vh-80px)] max-w-5xl mx-auto mt-16 -mb-8 lg:mb-0">
      <div className="flex items-center md:gap-12 h-[80%] px-8 sm:px-10 flex-col-reverse sm:flex-row-reverse justify-evenly lg:justify-between">
        <div className="w-full lg:max-w-[500px] flex flex-col gap-6 lg:gap-4">
          <FadeUp>
            <p className="flex font-normal tracking-tight text-sm sm:text-base max-sm:items-center pb-3 lg:pb-0">
              <Image src={"/palm.svg"} width={25} height={25} alt="palm" />
              Hi! I&apos;m{" "}
              <span className="text-[#FF667D] tracking-tight mx-1">
                Prajjwal Kumar
              </span>{" "}
              & your go-to
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-[400px]">
              Product Experience Designer
            </div>
            <p className="text-sm font-semibold leading-relaxed font-gilroy mt-6 mb-2">
              For startups to large organizations, let’s transform complex
              design problems into simple solutions.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-4">
              <Link
                href="/resume.pdf"
                download={true}
                className="border border-[#FF667D] py-3 px-10 rounded-full font-bold bg-[#FF667D] hover:bg-transparent text-white hover:text-[#FF667D] transition-all w-full lg:w-auto text-center font-gilroy"
              >
                Resume
              </Link>
              <Link
                className="border border-[#FF667D] py-3 px-10 rounded-full font-bold bg-[#FF667D] hover:bg-transparent text-white hover:text-[#FF667D] transition-all w-full lg:w-auto text-center font-gilroy"
                href={"mailto:prajjwalkumar98@gmail.com"}
              >
                E-Mail
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-[#333333] text-xs sm:text-sm font-gilroy font-normal mt-2">
              As a student, I&apos;ve developed strong independent and
              team-working skills, and now I&apos;m ready to contribute my
              expertise to a company.
            </p>
          </FadeUp>
        </div>

        {/* Image Section */}
        <FadeUp
          delay={0.1}
          className="relative w-[70%] sm:w-[60%] lg:w-[336px] max-w-[400px] aspect-square rounded-full overflow-hidden"
        >
          <Image
            src={"/new/prajjwal.jpeg"}
            fill
            alt="hero-section-image"
            className="object-cover rounded-full"
          />
        </FadeUp>
      </div>
      <div className="w-full h-[calc(100vh-80%-80px)] my-0 lg:my-0">
        <FadeUp delay={0.3}>
          <p className="text-sm text-[#FF667D] text-center font-medium font-gilroy">
            A FEW OF THE PLACES I WORKED
          </p>
        </FadeUp>
        <FadeUp
          className="relative flex items-center justify-center w-[80%] h-[70%] mx-auto "
          delay={0.35}
        >
          <Image
            src={"/company-logos.svg"}
            alt="company-logos"
            fill
            className="object-contain"
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default HeroSection;
