import React from "react";

const ExploreAppSection: React.FC = () => {
  return (
    <section
      id="explore-app"
      className="bg-[#8670E5] py-20 text-white text-center"
      aria-label="Explore BC App Section"
    >
      {/* Badge and Heading */}
      <div className="mb-12">
        <span
          style={{ backgroundColor: "#ffffff26" }}
          className="inline-block text-white px-3 py-1 rounded-full shadow-sm font-bold text-sm mb-4"
        >
          Our App 🔥
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto">
          Join BC Appa Today – Where Your Money Is Always Protected!
        </h2>
      </div>

      <div className="relative w-full flex justify-center items-center mt-10">
        {/* Top Center Image */}
        <img
          src="/assets/mobileScreen.png"
          alt="Above App"
          className="absolute w-[220px] sm:w-[250px] md:w-[286px] z-10"
        />
        {/* Main Image */}
        <img
          src="/assets/ourApp.png"
          alt="Explore BC App"
          className="w-screen h-auto rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default ExploreAppSection;
