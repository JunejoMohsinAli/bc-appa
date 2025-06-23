import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // You can also use your own SVG/icon

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#8670E5] hover:bg-[#5f49cc] text-white p-4 rounded-full shadow-lg z-50 transition duration-300"
          aria-label="Scroll to Top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
