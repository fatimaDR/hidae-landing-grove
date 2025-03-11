
import { useState, useRef, useEffect } from "react";
import { Map, MapPin, Clock, Phone } from "lucide-react";

const StoreLocation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    // This is a placeholder for the actual map integration
    // In a real implementation, we would initialize a map service here
    if (mapRef.current && isVisible) {
      // Initialize map (simulated for this example)
      console.log("Map would be initialized here");
      
      // For visual effect in this demo, we'll add a class to show the map is loaded
      setTimeout(() => {
        if (mapRef.current) {
          mapRef.current.classList.add("map-loaded");
        }
      }, 500);
    }
  }, [isVisible]);

  const openGoogleMaps = () => {
    // This would open the actual location in Google Maps
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Hidae+Shoes+Store",
      "_blank"
    );
  };

  return (
    <section
      id="location"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="hidae-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Visit Our Store
          </h2>
          <p className={`section-subheading transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Experience our collection in person and receive personalized fitting advice from our experts.
          </p>
        </div>

        <div className={`grid md:grid-cols-5 gap-8 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {/* Map container */}
          <div className="md:col-span-3 relative h-96 md:h-auto rounded-2xl overflow-hidden shadow-md">
            <div
              ref={mapRef}
              className="w-full h-full bg-hidae-lightGray relative transition-opacity duration-500 opacity-50"
            >
              {/* This would be replaced by an actual map in production */}
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1469&auto=format&fit=crop"
                alt="Map view of Hidae store location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-hidae-charcoal/30" />
              
              {/* Store marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-hidae-terracotta text-white p-3 rounded-full shadow-lg animate-bounce">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              
              {/* Controls overlay */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={openGoogleMaps}
                  className="bg-white p-2 rounded-md shadow hover:bg-hidae-beige transition-colors"
                  aria-label="Open in Google Maps"
                >
                  <Map className="h-5 w-5 text-hidae-charcoal" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Store information */}
          <div className="md:col-span-2 flex flex-col justify-center">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-6">
              <h3 className="font-serif text-2xl font-medium mb-6">Our Flagship Store</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-hidae-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-hidae-mediumGray">
                      123 Fashion Avenue<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-hidae-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Opening Hours</p>
                    <p className="text-hidae-mediumGray">
                      Monday - Friday: 10AM to 8PM<br />
                      Saturday: 10AM to 6PM<br />
                      Sunday: 12PM to 5PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-hidae-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Contact</p>
                    <p className="text-hidae-mediumGray">
                      Phone: (212) 555-1234<br />
                      Email: store@hidae.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={openGoogleMaps}
              className="btn-primary w-full justify-center"
            >
              Get Directions
              <Map className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
