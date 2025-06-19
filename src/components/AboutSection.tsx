import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-white pt-20 pb-24 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12"
    >
      {/* Left Content */}
      <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
        {/* Center Image */}
        <img
          src="/src/assets/about.png"
          alt="Main User"
          className="w-[524px] h-[491px]"
        />
      </div>

      {/* Right Content*/}
      <div className="max-w-2xl">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full shadow-sm font-bold text-sm mb-4"
        >
          About Our App 🔥
        </span>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#282c32] mb-4">
          🔒 Revolutionizing Savings Circles with 100% Financial Security
        </h2>

        <p className="text-gray-600 mb-4">
          Traditional Beesis (BCs) have always been a trusted way to save, but
          the fear of fraud, mismanagement, and defaults has held many back.
          <br />
          <strong className="text-[#282c32]">
            BC Appa is the ONLY platform where your savings are 100% secure,
            even if a member defaults – thanks to our insurance-backed
            protection.
          </strong>
        </p>

        <ul className="space-y-4">
          {[
            <>
              <span className="font-bold">Guaranteed Protection</span> – If a
              member defaults, your payout is covered by insurance.
            </>,
            <>
              <span className="font-bold">100% Verified Users</span> – Every
              participant is authenticated, reducing fraud risk.
            </>,
            <>
              <span className="font-bold">Secure</span>{" "}
              <span className="font-bold">Digital Transactions </span> – No cash
              exchanges, no hidden risks.
            </>,
            <>
              <span className="font-bold">Full Transparency</span> – All records
              are digital and trackable in real-time.
            </>,
          ].map((text, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              {/* <CheckCircle className="text-green-500 w-5 h-5 mt-1 mr-3" /> */}
              <img
                src="/src/assets/checkmarkIcon.png"
                alt="Check Tick Mark"
                className="w-7 h-7 mr-3"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
