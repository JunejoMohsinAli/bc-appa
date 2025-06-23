import React, { useState } from "react";
import { ChevronsRight } from "lucide-react";

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What Happens If A Member Defaults?",
      answer:
        "Your payout is covered by our insurance – you will still receive your full amount.",
    },
    {
      question: "How Do I Know My Money Is Safe?",
      answer:
        "We use insurance-backed protection and verified users to ensure full financial security.",
    },
    {
      question: "Are Transactions Legally Protected?",
      answer:
        "Yes, all digital transactions follow legal and secure digital protocols.",
    },
    {
      question: "Can I Track My Contributions And Payouts?",
      answer:
        "Yes, everything is logged and viewable in real-time through the app.",
    },
  ];

  return (
    <section
      id="faqs"
      className="px-6 py-20 lg:px-20 bg-white text-[#282c32] max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full font-bold text-sm mb-4"
        >
          FAQs 🔥
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Frequently Ask Questions
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-[#f8f6ff] rounded-xl px-6 py-4 cursor-pointer transition"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-base">{item.question}</h3>
                <ChevronsRight
                  size={20}
                  className={`text-[#8670E5] transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              {/* Answer */}
              {isOpen && (
                <p className="text-sm text-gray-600 mt-3 transition-all duration-300 ease-in-out">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
