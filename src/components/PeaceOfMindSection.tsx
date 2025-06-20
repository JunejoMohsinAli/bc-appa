import React from "react";

const PeaceOfMindSection: React.FC = () => {
  const items = [
    {
      icon: "/assets/tickShield.png",
      title: "No More Risk of Default",
      desc: "Even if a member fails to pay, your money is safe with our insurance-backed protection.",
    },
    {
      icon: "/assets/wallet.png",
      title: "No More Cash Hassles",
      desc: "Everything is managed online, ensuring complete security.",
    },
    {
      icon: "/assets/verified.png",
      title: "No More Fraud",
      desc: "Verified users, automated tracking, and secure digital transactions eliminate risks.",
    },
  ];

  return (
    <section className="px-6 py-20 lg:px-20 bg-white">
      {/* Title & Badge */}
      <div className="text-center mb-16">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full shadow-sm font-bold text-sm mb-4"
        >
          Peace of Mind 🔥
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#282c32]">
          Why BC Appa Gives You Complete Peace Of Mind
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border border-gray-200 rounded-2xl p-6 text-center"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-[#282c32] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-12 text-[#282c32] font-bold text-2xl">
        ✨ Save with Confidence — Your money is always protected!
      </div>
    </section>
  );
};

export default PeaceOfMindSection;
