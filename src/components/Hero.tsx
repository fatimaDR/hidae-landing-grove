
import { useState, useEffect } from "react";
import { ChevronRight, ArrowDown } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToFeatured = () => {
    const featuredSection = document.getElementById("featured");
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-dot-pattern bg-[length:20px_20px] opacity-50" />
      
      {/* Content container */}
      <div className="hidae-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="inline-block bg-hidae-terracotta/10 text-hidae-terracotta px-4 py-2 rounded-full text-sm font-medium mb-6">
              Premium Footwear Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Step into 
              <span className="text-hidae-terracotta"> Timeless </span>
              Elegance
            </h1>
            <p className="text-lg text-hidae-mediumGray mb-8 max-w-lg">
              Discover our handcrafted shoes that blend contemporary design with 
              exceptional comfort. Each pair tells a story of craftsmanship and style.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToFeatured}
                className="btn-primary"
              >
                Explore Collection
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-outline"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-hidae-beige">
              <div className="absolute inset-0 bg-gradient-to-br from-hidae-beige/30 to-hidae-beige/10" />
              <img
                src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop"
                alt="Premium shoes from Hidae collection"
                className="w-full h-full object-cover object-center"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                }}
              />
              <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <p className="font-serif text-lg font-medium">Artisan Crafted</p>
                <p className="text-sm text-hidae-mediumGray">Made in Italy</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-hidae-terracotta/10 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-hidae-beige rounded-full animate-float animation-delay-1000" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
          <p className="text-sm mb-2">Scroll to explore</p>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
