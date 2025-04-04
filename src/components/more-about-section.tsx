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
            <p className="leading-[28px] text-sm  text-[#333333] mt-[34px] font-gilroy">
              I&apos;m Prajjwal Kumar, an agile and collaborative designer who
              isn&apos;t afraid to take risks. I thrive in dynamic environments
              that require me to step out of my comfort zone and challenge me to
              grow. As a self-taught Fashion and UX designer, I take ownership
              of my work and don&apos;t let roles define what is expected of me.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="leading-[28px]  text-sm text-[#333333] mt-[28px] font-gilroy">
              When I&apos;m not immersed in work, you can find me exploring new
              cities with a camera in my hand. &apos;s about balance, and
              I&apos;m all about embracing every aspect of it.
            </p>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="leading-[28px] text-sm  text-[#333333] mt-[28px] font-gilroy">
              I believe in waking up each day eager to make a difference!
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.3} className="relative h-1/2 w-1/2 ">
          <video
            src="/desktop_assets/homepage/about-me.mp4"
            autoPlay
            loop
            className="w-full aspect-square object-cover"
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default MoreAboutSection;
