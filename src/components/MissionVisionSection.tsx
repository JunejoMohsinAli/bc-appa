import React from "react";
import StatsBar from "./StatsBar";

const MissionVisionSection: React.FC = () => {
  return (
    <section className="">
      <div className="bg-[#f8f5ff] px-6 py-20 lg:px-20 rounded-[40px] mx-4 lg:mx-12 my-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-xl text-[#282c32]">
            <span
              style={{ backgroundColor: "#8670E526" }}
              className="inline-block text-[#8670E5] px-3 py-1 rounded-full shadow-sm font-bold text-sm mb-4"
            >
              Mission & Vision 🔥
            </span>

            <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              To eliminate financial insecurity in group savings, ensuring every
              member contributes and gets their fair payout – without any risk.
            </p>

            <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide a worry-free digital BC platform where every user
              enjoys secure, insured, and seamless savings experiences.
            </p>
          </div>

          {/* Right Image */}
          <div className="max-w-md w-full">
            <img
              src="/assets/missionTarget.png"
              alt="Mission Target"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* StatsBar Component */}
      <StatsBar />
    </section>
  );
};

export default MissionVisionSection;
