import React from "react";

const PeaceOfMindOtherSection: React.FC = () => {
  const features = [
    {
      icon: "/assets/shieldBc.png",
      title: "BC Appa",
      desc: "Even if a member fails to pay, your money is safe with our insurance-backed protection.",
    },
    {
      icon: "/assets/mobile.png",
      title: "No More Cash Hassles",
      desc: "Everything is managed online, ensuring complete security.",
    },
  ];

  return (
    <section
      className="px-6 py-20 lg:px-20 bg-white text-[#282c32]"
      aria-label="Peace of Mind Differences Section"
    >
      {/* Badge + Heading */}
      <div className="text-center mb-16">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full shadow-sm font-bold text-xs mb-4"
        >
          Peace of Mind 🔥
        </span>
        <h2 className="text-5xl sm:text-4xl font-bold">
          What Makes BC Appa Different?
        </h2>
      </div>

      {/* Feature Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm p-6 text-center flex flex-col items-center hover:shadow-md transition duration-300"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-[500px] mx-auto">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Caption */}
      <div className="text-center mt-12 font-bold text-2xl">
        📢 Your Savings Are Safe – Always!
      </div>
    </section>
  );
};

export default PeaceOfMindOtherSection;
