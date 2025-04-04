import FadeUp from "./animations/fade-up";

const AvailableSection = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="max-w-[1100px] h-full lg:h-[420px] mx-auto flex flex-col items-start lg:items-center justify-center gap-10 py-16 lg:py-0 relative">
      <FadeUp className="absolute top-0 w-[100px] h-[70px] left-[20%] hidden lg:block ">
        <video
          src={"/desktop_assets/homepage/footer-light.mp4"}
          autoPlay
          loop
        />
      </FadeUp>
      <FadeUp className="absolute top-0 w-[100px] h-[70px] right-[20%] hidden lg:block">
        <video
          src={"/desktop_assets/homepage/footer-light.mp4"}
          autoPlay
          loop
        />
      </FadeUp>

      <div className="flex items-center flex-col lg:flex-row justify-center px-8 lg:px-0 gap-10 lg:gap-0">
        <FadeUp delay={0.1}>
          <h1 className="font-bold text-2xl lg:text-3xl max-w-[450px]  text-center">
            From Concept to Creation Let&apos;s Make it Happen!
          </h1>
        </FadeUp>
      </div>
      <div className="w-full flex flex-col items-center justify-center  px-8 lg:px-0 ">
        <FadeUp delay={0.2}>
          <p className="text-[#FF667D] text-lg font-bold text-center font-gilroy">
            I&apos;m available for full-time roles & freelance projects.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-[#333333] mt-[13px] max-w-[310px] text-center font-gilroy">
            Think carefully since this opportunity will not come again.
            It&apos;s a tiny world.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p className="text-[#FF667D] mt-[13px] max-w-[310px] text-center font-semibold">
            &copy; {year} Prajjwal Designs.
          </p>
        </FadeUp>
      </div>
    </div>
  );
};

export default AvailableSection;
