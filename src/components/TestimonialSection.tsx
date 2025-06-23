import React from "react";
import { Star } from "lucide-react";

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      image: "/assets/zara.png",
      name: "Zara Noor",
      role: "Team Leader",
      rating: 5,
      quote:
        "I never have to worry about losing money again! Even when a member defaulted, my payout was fully covered.",
    },
    {
      image: "/assets/abdullah.png",
      name: "Abdullah Malik",
      role: "Team Leader",
      rating: 5,
      quote:
        "Finally, a Beesi platform that actually protects my savings. I can save stress-free!",
    },
    {
      image: "/assets/hira.png",
      name: "Hira Khan",
      role: "Team Leader",
      rating: 5,
      quote:
        "I never have to worry about losing money again! Even when a member defaulted, my payout was fully covered.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-r from-[#f9f4ff] to-[#f1fefc] px-6 py-20 lg:px-20 text-[#282c32]"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <span
          style={{ backgroundColor: "#8670E526" }}
          className="inline-block text-[#8670E5] px-3 py-1 rounded-full font-bold text-sm mb-4"
        >
          Testimonial 🔥
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold">
          What Our Clients Say?
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4"
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-bold text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 text-[#fbbf24] text-sm">
              {Array(item.rating)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-gray-600 relative pb-4">
              {item.quote}
              <span className="absolute bottom-0 right-0 text-[#8670E5] text-lg">
                ❞
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="bg-[#8670E5] text-white px-6 py-3 rounded-full font-bold hover:bg-[#6e5ccc] transition">
          Join a Secure BC Now! →
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
