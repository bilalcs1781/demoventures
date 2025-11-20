"use client";

import { useScrollPosition } from "./hooks/useScrollPosition";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  const isScrolled = useScrollPosition(400);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sticky Navbar - appears when scrolled */}
      <Navbar isVisible={isScrolled} />

      {/* Banner/Slider */}
      <Banner showSearchBar={!isScrolled} />

      {/* Main Content - for testing scroll behavior */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Our Platform
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Scroll down to see the search bar move to the navbar. The transition is smooth
              and optimized for performance.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Feature {item}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Description of feature {item} goes here.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              More Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Keep scrolling to test the sticky navbar behavior. The search bar will smoothly
              transition from the banner to the navbar when you scroll past 400px.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              The implementation includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-4 space-y-2">
              <li>Responsive design for all screen sizes</li>
              <li>Optimized scroll event handling with requestAnimationFrame</li>
              <li>Smooth CSS transitions and animations</li>
              <li>Accessible components with proper ARIA labels</li>
              <li>Dark mode support</li>
            </ul>
          </section>

          {/* Extra content to ensure scrollability */}
          {Array.from({ length: 5 }).map((_, i) => (
            <section
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 md:p-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Section {i + 4}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                This is additional content to demonstrate the scroll behavior. The navbar will
                appear when you scroll up past the threshold, and the search bar will be
                available in the navbar.
              </p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
