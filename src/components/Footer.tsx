import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#f9f9f9] px-6 py-16 lg:px-20 text-[#282c32] overflow-hidden">
      {/* Background Circles */}
      <img
        src="/assets/footerCircle1.png"
        alt="Decor Circle 1"
        className="absolute top-0 left-0 w-32 opacity-20 z-0"
      />
      <img
        src="/assets/footerCircle2.png"
        alt="Decor Circle 2"
        className="absolute bottom-0 right-0 w-40 opacity-20 z-0"
      />
      <img
        src="/assets/footerCircle3.png"
        alt="Decor Circle 2"
        className="absolute bottom-0 right-0 w-40 opacity-20 z-0"
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Left - Logo*/}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#8670E5]">BC APPA</h2>
          <p className="text-sm text-gray-600">
            It is a long established fact that from will be distracted by the
            readable from when looking.
          </p>
          <div className="flex gap-3 mt-3">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/appstore.png"
                alt="App Store"
                className="w-[120px]"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/playstore.png"
                alt="Play Store"
                className="w-[120px]"
              />
            </a>
          </div>
        </div>

        {/* Center - Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Integrations</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Right - Contact */}
        <div className="bg-[#f3f0ff] rounded-xl p-6">
          <h4 className="text-sm text-[#8670E5] font-medium mb-1">Address</h4>
          <h3 className="text-lg font-bold mb-2">Ready To Get Started?</h3>
          <p className="text-sm text-gray-600 mb-4">
            It is a long established fact that a reader will be distracted
            layout.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Mail size={16} className="text-[#8670E5]" />
            <span className="text-sm">info@bcappa.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#8670E5]" />
            <span className="text-sm">+880 123 654 789 00</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 my-10 border-t border-gray-200"></div>

      {/* Bottom Row */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-sm max-w-7xl mx-auto">
        <p className="text-gray-500 mb-4 md:mb-0">
          Copyright © BC APPA All Rights
        </p>
        <div className="flex gap-4 text-[#8670E5]">
          <Facebook size={18} className="cursor-pointer hover:text-black" />
          <Twitter size={18} className="cursor-pointer hover:text-black" />
          <Linkedin size={18} className="cursor-pointer hover:text-black" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
