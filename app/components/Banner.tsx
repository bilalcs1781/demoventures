"use client";

import { useState, useEffect } from "react";
import AdvancedSearchBar from "./AdvancedSearchBar";

interface BannerSlide {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
}

interface BannerProps {
  slides?: BannerSlide[];
  showSearchBar?: boolean;
}

const defaultSlides: BannerSlide[] = [
  {
    id: 1,
    image: "/baner.png",
    title: "Celebrate in venues big",
    subtitle: "Discover amazing experiences",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1920&h=600&fit=crop&q=80",
    title: "Explore New Horizons Today",
    subtitle: "Your journey starts here",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=600&fit=crop&q=80",
    title: "Find Your Perfect Venue",
    subtitle: "Connect with the world around you",
  },
];

export default function Banner({
  slides = defaultSlides,
  showSearchBar = true,
}: BannerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden shadow-lg">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Light overlay for minimal text readability without obscuring image */}
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Title - Above search bar with more spacing */}
        <div className="text-center text-white w-full max-w-2xl mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {slides[currentSlide].title && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold drop-shadow-lg">
              {slides[currentSlide].title}
            </h2>
          )}
        </div>

        {/* Advanced Search Bar - Positioned below text with clear separation */}
        <div
          className={`
            w-full flex justify-center
            transition-all duration-500 ease-in-out
            ${
              showSearchBar
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <AdvancedSearchBar />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30
          bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30
          backdrop-blur-sm
          rounded-full p-2 sm:p-3
          text-white
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-white/50
        "
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30
          bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30
          backdrop-blur-sm
          rounded-full p-2 sm:p-3
          text-white
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-white/50
        "
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators - Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              h-2 w-2 rounded-full transition-all duration-300
              ${
                index === currentSlide
                  ? "bg-yellow-400"
                  : "bg-gray-400 hover:bg-gray-500"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
