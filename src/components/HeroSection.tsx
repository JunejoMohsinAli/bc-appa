import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-20 sm:pt-20 md:pt-16 lg:pt-8 bg-gradient-to-r from-[#f8f5ff] to-[#f1fefc] min-h-screen flex items-center rounded-b-[50px]"
    >
      <div className="container mx-auto px-6 md:flex justify-between items-center flex flex-col-reverse md:flex-row">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <span
            style={{ backgroundColor: "#8670E526" }}
            className="inline-block text-[#8670E5] px-3 py-1 rounded-full shadow-sm font-bold text-sm"
          >
            <span className="inline-block bg-white text-black px-3 py-1 mr-1 rounded-full shadow-sm font-bold text-sm">
              BC APPA
            </span>
            Connect & Save 🔥
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Guaranteed Safety <br /> For Your Savings
          </h1>

          <p className="text-gray-600">
            Join a trusted platform where every Rupee you save is fully
            protected, even if a member defaults. <br />
            <strong>
              🚀 Save, Contribute & Grow – With Complete Peace of Mind!
            </strong>
          </p>

          <p className="text-gray-600">
            🔹 100% Verified Users 🔹 Insurance-Backed Security 🔹 Real-Time
            Digital Tracking
          </p>

          <button className="mt-4 bg-[#8670E5] text-white px-8 py-4 rounded-full hover:bg-purple-700 transition font-bold w-[150px] h-[57px]">
            Join Now →
          </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-full max-w-md">
            <img
              src="/assets/hero.png"
              alt="App Screens"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
