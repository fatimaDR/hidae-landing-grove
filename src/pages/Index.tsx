
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Reviews from "../components/Reviews";
import StoreLocation from "../components/StoreLocation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Reviews />
      <StoreLocation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
