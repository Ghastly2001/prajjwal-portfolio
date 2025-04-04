import FadeUp from "@/components/animations/fade-up";

const page = () => {
  return (
    <div className="min-h-screen lg:min-h-[80vh] max-w-5xl mx-auto flex flex-col justify-center px-4 sm:px-6">
      {/* Header */}
      <div className=" items-start gap-6 hidden lg:flex">
        <FadeUp>
          <h1 className="text-3xl font-bold text-[#333333]">
            HELLO, <br />
            NICE TO MEET YOU!
          </h1>
        </FadeUp>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col-reverse sm:flex-row gap-6 sm:gap-[109px] items-start lg:items-center">
        {/* Left Text Section */}
        <div className="w-full sm:max-w-[55%] font-gilroy space-y-8 sm:space-y-10">
          {/* Work Section */}
          <div>
            <FadeUp delay={0.1}>
              <h1 className="text-base text-[#FF667D] font-medium">
                PRAJJWAL IN OFFICE
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[#333333] leading-[28px] mt-[6px] text-sm font-medium">
                At work, I&apos;m Prajjwal—the go-to designer who thrives in a
                friendly and collaborative environment. With a mix of creativity
                and camaraderie, I bring ideas to life while keeping the office
                vibe light and fun!
              </p>
            </FadeUp>
          </div>

          {/* Personal Section */}
          <div>
            <FadeUp delay={0.3}>
              <h1 className="text-base text-[#FF667D] font-medium">
                PRAJJWAL IN PERSON
              </h1>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="text-[#333333] leading-[28px] mt-[6px] text-sm font-medium">
                I&apos;ve spent the last three years learning design and gained
                a year of hands-on experience through an internship. My work has
                been appreciated on various design platforms, which feels
                amazing! When I&apos;m not designing, you&apos;ll find me
                exploring new cities with a camera, capturing moments and
                memories. <br />I believe in starting every day with excitement
                and the drive to make a difference!
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="flex items-start gap-6 lg:hidden">
          <FadeUp>
            <h1 className="text-3xl font-bold text-[#333333]">
              HELLO, <br />
              NICE TO MEET YOU!
            </h1>
          </FadeUp>
        </div>
        <FadeUp className="w-full sm:w-[500px] h-[250px] sm:h-[350px] mt-4 sm:mt-auto rounded-xl overflow-hidden">
          <video
            src="/desktop_assets/about-me-page/about-me-page.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </FadeUp>
      </div>
    </div>
  );
};

export default page;
