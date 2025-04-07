import FadeUp from "./animations/fade-up";

const MoreAboutSection = () => {
  return (
    <div className="max-w-5xl h-full lg:h-[630px] mx-auto my-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full px-8 sm:px-10 gap-16 ">
        <div className="w-full">
          <FadeUp>
            <p className="text-[#FF667D] text-xs font-medium font-gilroy">
              MORE ABOUT ME
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-3xl font-bold mt-[15px] leading-[42px]">
              <span className="text-[#FF667D]"> Digital designer </span> and a
              little <br /> bit of everything
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="leading-[28px] text-sm  text-[#333333] mt-[34px] font-gilroy font-medium">
              Hi, I&apos;m Prajjwal — a designer by profession and an old-school
              heart by nature. Learning new ways of design and exploring tools
              that bring ideas to life is something I genuinely enjoy.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="leading-[28px]  text-sm text-[#333333] mt-[28px] font-gilroy font-medium">
              Beyond work, I love staying connected to my roots, finding joy in
              the smallest moments — whether it&apos;s poetry, kabaddi, or
              listening to stories from the elderly. Always up for good vibes,
              good conversations, and doing everything with a little extra
              heart.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="leading-[28px] text-sm  text-[#333333] mt-[28px] font-gilroy font-medium">
              I believe in waking up each day eager to make a difference!
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.3} className="relative h-1/2 w-1/2 ">
          <video
            src="/desktop_assets/homepage/about-me.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-square object-cover"
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default MoreAboutSection;
