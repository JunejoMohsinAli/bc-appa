import React from "react";

const OurAppCTASection: React.FC = () => {
  return (
    <section className="bg-[#8670E5] rounded-[40px] px-6 py-12 sm:py-16 lg:px-20 text-white my-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          {/* Badge */}
          <span
            style={{ backgroundColor: "#ffffff26" }}
            className="inline-block text-white px-3 py-1 rounded-full font-bold text-sm mb-4"
          >
            Our App 🔥
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join BC Appa Today – Where Your Money Is Always Protected!
          </h2>

          {/* Paragraph */}
          <p className="text-white/80 text-md mb-6 max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>

          {/* Store Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            <img
              src="/assets/google-play.png"
              alt="Google Play"
              className="w-[140px] h-auto cursor-pointer hover:scale-105 transition duration-300"
            />
            <img
              src="/assets/app-store.png"
              alt="App Store"
              className="w-[140px] h-auto cursor-pointer hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/assets/ourappMobile.png"
            alt="App Preview"
            className="w-full max-w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default OurAppCTASection;
