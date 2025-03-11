
import { useState, useRef, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft, MessageSquare } from "lucide-react";

// Review data (simulating Google reviews)
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2 months ago",
    comment:
      "These are the most comfortable shoes I've ever owned. The craftsmanship is exceptional, and they look even better in person. Worth every penny!",
    profileImage: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "I've been a loyal customer for years. Hidae continues to impress with their attention to detail and quality materials. The new collection is stunning.",
    profileImage: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    date: "1 month ago",
    comment:
      "Beautiful design and excellent quality. The staff was incredibly helpful in finding the perfect fit. Would definitely recommend to friends.",
    profileImage: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 5,
    date: "2 months ago",
    comment:
      "The attention to detail is remarkable. These shoes are not just footwear; they're works of art. Fantastic customer service too!",
    profileImage: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 5,
    name: "Sophia Martinez",
    rating: 5,
    date: "3 months ago",
    comment:
      "I received so many compliments on my Hidae shoes. They're stylish, comfortable, and durable. The perfect combination I've been looking for.",
    profileImage: "https://i.pravatar.cc/150?img=9",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const reviewsPerPage = 3;
  const maxIndex = Math.ceil(reviews.length / reviewsPerPage) - 1;
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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    currentIndex * reviewsPerPage + reviewsPerPage
  );

  const totalAverageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="section-padding bg-hidae-beige"
    >
      <div className="hidae-container">
        <div className="text-center mb-16">
          <h2 className={`section-heading transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            What Our Customers Say
          </h2>
          <div className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {renderStars(Math.round(totalAverageRating))}
            <span className="text-lg font-medium ml-2">
              {totalAverageRating.toFixed(1)}
            </span>
            <span className="text-hidae-mediumGray ml-1">
              based on {reviews.length} reviews
            </span>
          </div>
          <p className={`section-subheading transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Our customers' satisfaction is our greatest achievement. Here's what they have to say about their Hidae experience.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="grid md:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={review.id}
                className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-500 delay-${
                  index * 100
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.profileImage}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-hidae-mediumGray">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">{renderStars(review.rating)}</div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Review navigation */}
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-hidae-terracotta/10 hover:bg-hidae-terracotta/20 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-6 w-6 text-hidae-charcoal" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "bg-hidae-terracotta w-6"
                      : "bg-hidae-charcoal/30 hover:bg-hidae-charcoal/50"
                  }`}
                  aria-label={`Go to review page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-hidae-terracotta/10 hover:bg-hidae-terracotta/20 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-6 w-6 text-hidae-charcoal" />
            </button>
          </div>

          {/* Google reviews */}
          <div className="mt-12 text-center">
            <a
              href="https://g.page/r/hidae-shoes/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <MessageSquare className="h-5 w-5 text-hidae-terracotta" />
              <span>Leave us a review on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
