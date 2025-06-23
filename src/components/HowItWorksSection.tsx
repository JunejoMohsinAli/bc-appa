import React from "react";

const steps = [
  {
    step: "STEP - 01",
    title: "Create or Join a BC",
    desc: "Select your savings circle with confidence, knowing all members are verified.",
    className: "translate-y-[0px] -translate-x-[60px]",
  },
  {
    step: "STEP - 02",
    title: "Set Contributions & Payouts",
    desc: "Transparent terms, with guaranteed safety if someone defaults.",
    className: "translate-y-[50px] translate-x-[-20px]",
  },
  {
    step: "STEP - 03",
    title: "Enjoy Secure Transactions",
    desc: "Digital deposits & withdrawals, eliminating cash risks.",
    className: "translate-y-[0px] -translate-x-[-20px]",
  },
  {
    step: "STEP - 04",
    title: "Your Money is Insured",
    desc: "If a member defaults, you still get paid!",
    className: "translate-y-[50px] translate-x-[60px]",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      aria-label="How BC Appa Works"
      className="px-6 py-20 lg:px-20 text-[#282c32] relative overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-20">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full font-bold text-sm mb-4"
        >
          How It Work 🔥
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold">How It Works?</h2>
      </div>

      {/* Curve Background */}
      <div className="relative w-full max-w-[1300px] mx-auto min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
        <img
          src="/assets/howitworksLine.png"
          alt="Curve Line"
          className="w-full h-auto pointer-events-none select-none"
        />

        {/* Steps on Top of Curve */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-4 sm:px-12 md:px-20 lg:px-24">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`w-1/4 flex flex-col items-center text-center ${item.className}`}
            >
              {/* Step Label */}
              <span className="bg-[#EFE9FF] text-[#8670E5] text-xs px-3 py-1 rounded-full font-semibold mb-2">
                {item.step}
              </span>

              {/* Title & Description */}
              <h3 className="text-base font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final statement */}
      <p className="text-center mt-20 font-bold text-2xl">
        🚀 No fraud, no loss — Just safe, smart saving!
      </p>
    </section>
  );
};

export default HowItWorksSection;
