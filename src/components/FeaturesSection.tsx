import React from "react";

const FeaturesSection: React.FC = () => {
  const leftFeatures = [
    {
      icon: "/assets/shield.png",
      title: "Insurance-Backed Security",
      desc: "Your payout is covered, even if someone defaults.",
    },
    {
      icon: "/assets/tick.png",
      title: "Fraud-Proof & Verified User",
      desc: "Every participant is authenticated before joining.",
    },
  ];

  const realTimeFeature = {
    icon: "/assets/chart.png",
    title: "Real-Time Tracking",
    desc: "Monitor all contributions and payouts with complete transparency.",
  };

  const rightFeatures = [
    {
      icon: "/assets/notification.png",
      title: "Instant Notifications",
      desc: "Stay updated on every transaction.",
    },
    {
      icon: "/assets/sharia.png",
      title: "Sharia-Compliant Options",
      desc: "Choose from Islamic savings circles with zero Riba (interest).",
    },
  ];

  return (
    <section
      id="features"
      className="px-6 py-20 lg:px-20 bg-white text-[#282c32]"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full shadow-sm font-bold text-sm mb-4"
        >
          Features 🔥
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold">Key Features</h2>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-[1600px] mx-auto">
        {/* Left Side */}
        <div className="flex flex-col gap-10 w-full lg:w-1/3">
          {leftFeatures.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mt-1"
              />
              <div>
                <h3 className="font-bold text-2xl">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative w-full lg:w-1/3 flex justify-center items-center">
          {/* Background Circle Image */}
          <img
            src="/assets/phoneCircle.png"
            alt="Background Circle"
            className="absolute w-full max-w-[360px] lg:max-w-[400px] z-0"
          />

          {/* Foreground Phone Image */}
          <img
            src="/assets/phoneCenter.png"
            alt="App Mockup"
            className="relative w-full max-w-[360px] lg:max-w-[400px] z-10"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-10 w-full lg:w-1/3">
          {rightFeatures.map((item, index) => (
            <div key={index} className="flex gap-4 items-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mt-1"
              />
              <div>
                <h3 className="font-bold text-2xl">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Feature Below Image */}
      <div className="flex justify-center mt-16">
        <div className="flex gap-4 max-w-md items-center">
          <img
            src={realTimeFeature.icon}
            alt={realTimeFeature.title}
            className="w-12 h-12 mt-1"
          />
          <div>
            <h3 className="font-bold text-2xl">{realTimeFeature.title}</h3>
            <p className="text-gray-600 text-base">{realTimeFeature.desc}</p>
          </div>
        </div>
      </div>

      {/* Bottom Statement */}
      <div className="text-center mt-16 text-2xl font-bold">
        📢 No more financial worries – BC Appa has you covered!
      </div>
    </section>
  );
};

export default FeaturesSection;
