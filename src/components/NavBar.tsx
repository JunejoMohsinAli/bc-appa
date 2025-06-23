import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-9 py-6 flex justify-between items-center transition-all duration-300"
      >
        {/* Logo */}
        <img src="/assets/logo.png" alt="BC Appa Logo" className="h-12" />

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
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 pt-6 pb-8 shadow-md rounded-b-xl w-full">
          {/* Mobile Nav Links */}
          <ul className="flex flex-col space-y-4 font-semibold text-black text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block w-full hover:text-[#8670E5] transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
