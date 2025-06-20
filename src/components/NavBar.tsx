import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "Explore App", href: "#explore-app" },
    { name: "Blogs", href: "#blogs" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="container mx-auto px-9 py-11 flex justify-between items-center"
      >
        {/* Logo */}
        <div className="text-4xl font-bold text-[#8670E5]">BC APPA</div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 font-bold text-[#282c32]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#8670E5] cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </ul>
        <button className="hidden lg:block bg-[#8670E5] text-white px-8 py-4 rounded-full hover:bg-black transition font-bold w-[150px] h-[57px]">
          Join Now →
        </button>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 pt-4 pb-6 shadow-lg">
          <ul className="space-y-4 font-medium text-black text-base p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-purple-700 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
