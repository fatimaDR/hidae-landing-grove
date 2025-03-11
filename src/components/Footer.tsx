
import { ChevronRight, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hidae-charcoal text-white pt-16 pb-8">
      <div className="hidae-container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl font-medium tracking-tight mb-4">
              <span className="text-hidae-terracotta">Hi</span>dae
            </h2>
            <p className="text-hidae-lightGray mb-6">
              Crafting premium footwear that balances exceptional design with superior comfort.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Store Location
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Collections</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Men's Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Women's Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Limited Editions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Seasonal Releases
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hidae-lightGray hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-hidae-lightGray mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-white/10 rounded-l-lg border-0 text-white placeholder:text-hidae-lightGray focus:outline-none focus:ring-2 focus:ring-hidae-terracotta"
              />
              <button
                type="submit"
                className="bg-hidae-terracotta px-4 rounded-r-lg hover:bg-hidae-terracotta/90 transition-colors"
                aria-label="Subscribe"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
            <p className="text-xs text-hidae-lightGray mt-3">
              By subscribing you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hidae-lightGray text-sm text-center md:text-left">
            &copy; {currentYear} Hidae Footwear. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-hidae-lightGray hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="text-xs text-hidae-lightGray hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-hidae-lightGray hover:text-white transition-colors">
              Shipping & Returns
            </a>
            <a href="#" className="text-xs text-hidae-lightGray hover:text-white transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
