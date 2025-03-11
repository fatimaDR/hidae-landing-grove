
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="hidae-container flex items-center justify-between">
        <a href="#hero" className="z-50">
          <h1 className="font-serif text-2xl font-medium tracking-tight">
            <span className="text-hidae-terracotta">Hi</span>dae
          </h1>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("featured")}
            className="text-sm font-medium hover:text-hidae-terracotta transition-colors"
          >
            Collection
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-sm font-medium hover:text-hidae-terracotta transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("location")}
            className="text-sm font-medium hover:text-hidae-terracotta transition-colors"
          >
            Find Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-primary py-2"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-hidae-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-hidae-charcoal" />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-8 p-4">
            <button
              onClick={() => scrollToSection("featured")}
              className="text-xl font-medium hover:text-hidae-terracotta transition-colors"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="text-xl font-medium hover:text-hidae-terracotta transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-xl font-medium hover:text-hidae-terracotta transition-colors"
            >
              Find Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary w-full justify-center text-center mt-4"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
