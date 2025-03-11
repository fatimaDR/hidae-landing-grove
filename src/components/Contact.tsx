
import { useState, useRef, useEffect, FormEvent } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulate form submission success
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset form submitted state after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-hidae-charcoal text-white"
    >
      <div className="hidae-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading text-white transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Get in Touch
          </h2>
          <p className={`section-subheading text-hidae-lightGray transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Have questions about our products or services? We're here to help.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {/* Contact information */}
          <div className="bg-hidae-charcoal/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="font-serif text-2xl font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-hidae-terracotta/20 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-hidae-terracotta" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Call Us</p>
                  <p className="text-hidae-lightGray">
                    <a href="tel:+12125551234" className="hover:text-white transition-colors">
                      (212) 555-1234
                    </a>
                  </p>
                  <p className="text-sm text-hidae-lightGray mt-1">
                    Monday - Friday, 9AM to 6PM EST
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-hidae-terracotta/20 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-hidae-terracotta" />
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">Email Us</p>
                  <p className="text-hidae-lightGray">
                    <a href="mailto:info@hidae.com" className="hover:text-white transition-colors">
                      info@hidae.com
                    </a>
                  </p>
                  <p className="text-sm text-hidae-lightGray mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-hidae-terracotta/5 to-transparent opacity-70" />
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1480&auto=format&fit=crop"
                alt="Hidae shoes"
                className="rounded-xl h-64 w-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white text-hidae-charcoal rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl font-medium mb-6">Send Us a Message</h3>
            
            {formSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="text-xl font-medium mb-2">Thank You!</h4>
                <p className="text-hidae-mediumGray mb-8">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-hidae-beige focus:border-hidae-terracotta focus:ring-1 focus:ring-hidae-terracotta outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-hidae-beige focus:border-hidae-terracotta focus:ring-1 focus:ring-hidae-terracotta outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-hidae-beige focus:border-hidae-terracotta focus:ring-1 focus:ring-hidae-terracotta outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Store Hours">Store Hours</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-hidae-beige focus:border-hidae-terracotta focus:ring-1 focus:ring-hidae-terracotta outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-6"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
