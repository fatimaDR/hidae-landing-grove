
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

// Featured product data
const products = [
  {
    id: 1,
    name: "Elegance Classic",
    description: "Timeless Italian leather oxford with handcrafted detailing.",
    price: "$289",
    imageSrc: "https://images.unsplash.com/photo-1627062598678-e3744f0944c3?q=80&w=987&auto=format&fit=crop",
    category: "Men's Oxford",
  },
  {
    id: 2,
    name: "Modern Loafer",
    description: "Contemporary design meets all-day comfort in premium suede.",
    price: "$245",
    imageSrc: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1015&auto=format&fit=crop",
    category: "Women's Loafer",
  },
  {
    id: 3,
    name: "Urban Walker",
    description: "Lightweight and durable design for the modern explorer.",
    price: "$195",
    imageSrc: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=998&auto=format&fit=crop",
    category: "Unisex Sneaker",
  },
  {
    id: 4,
    name: "Aria Heel",
    description: "Sculpted heel with memory foam insole for exceptional comfort.",
    price: "$275",
    imageSrc: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1160&auto=format&fit=crop",
    category: "Women's Heel",
  },
  {
    id: 5,
    name: "Venture Boot",
    description: "Weatherproof construction with premium full-grain leather.",
    price: "$325",
    imageSrc: "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?q=80&w=1015&auto=format&fit=crop",
    category: "Men's Boot",
  },
];

const FeaturedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const scrollNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="section-padding bg-hidae-charcoal text-white"
    >
      <div className="hidae-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading text-white transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Featured Collection
          </h2>
          <p className={`section-subheading text-hidae-lightGray max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Each pair is a testament to our commitment to quality, comfort, and timeless style.
            Explore our carefully curated selection.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {/* Product carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-hidae-beige/10">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-hidae-charcoal/80 to-transparent opacity-40" />
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-hidae-terracotta/20 text-hidae-terracotta px-3 py-1 rounded-full text-sm font-medium mb-4">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                        {product.name}
                      </h3>
                      <p className="text-hidae-lightGray mb-6">
                        {product.description}
                      </p>
                      <p className="font-medium text-2xl mb-8">{product.price}</p>
                      <button className="btn-primary">
                        View Details
                        <Plus className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-hidae-terracotta/10 hover:bg-hidae-terracotta/20 transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "bg-hidae-terracotta w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-hidae-terracotta/10 hover:bg-hidae-terracotta/20 transition-colors"
              aria-label="Next product"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
