"use client";

import { useState } from "react";

interface AdvancedSearchBarProps {
  className?: string;
}

export default function AdvancedSearchBar({
  className = "",
}: AdvancedSearchBarProps) {
  const [searchType, setSearchType] = useState<"venue" | "vendors">("venue");
  const [where, setWhere] = useState("Dubai, UAE");
  const [when, setWhen] = useState("Anytime");
  const [guests, setGuests] = useState("10-20");
  const [showWhereDropdown, setShowWhereDropdown] = useState(false);
  const [showWhenDropdown, setShowWhenDropdown] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const locations = [
    "Dubai, UAE",
    "Abu Dhabi, UAE",
    "Sharjah, UAE",
    "Doha, Qatar",
  ];
  const timeOptions = ["Anytime", "Today", "This Week", "This Month", "Custom"];
  const guestOptions = ["1-5", "6-10", "10-20", "20-50", "50+"];

  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>
      {/* Main Search Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 relative">
        {/* Selection Buttons - Inside on mobile, overlapping on desktop */}
        <div className="flex items-center justify-center gap-2 mb-4 md:mb-0 md:absolute md:-top-12 md:left-1/2 md:-translate-x-1/2 z-10 bg-white px-4 py-2 rounded-lg shadow-md">
          <button
            onClick={() => setSearchType("venue")}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-pointer
              ${
                searchType === "venue"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-black hover:bg-gray-50"
              }
            `}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span>Venue</span>
          </button>
          <button
            onClick={() => setSearchType("vendors")}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-pointer
              ${
                searchType === "vendors"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-black hover:bg-gray-50"
              }
            `}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span>Vendors</span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-2 sm:gap-4">
          {/* Where Field */}
          <div className="flex-1 relative">
            <label className="block text-xs sm:text-sm text-gray-500 mb-1">
              Where
            </label>
            <div className="relative">
              <button
                onClick={() => {
                  setShowWhereDropdown(!showWhereDropdown);
                  setShowWhenDropdown(false);
                  setShowGuestsDropdown(false);
                }}
                className="w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-sm sm:text-base text-gray-900 block truncate">
                  {where}
                </span>
              </button>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {showWhereDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowWhereDropdown(false)}
                  />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-20 max-h-60 overflow-y-auto">
                    {locations.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setWhere(location);
                          setShowWhereDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* When Field */}
          <div className="flex-1 relative">
            <label className="block text-xs sm:text-sm text-gray-500 mb-1">
              When
            </label>
            <div className="relative">
              <button
                onClick={() => {
                  setShowWhenDropdown(!showWhenDropdown);
                  setShowWhereDropdown(false);
                  setShowGuestsDropdown(false);
                }}
                className="w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-sm sm:text-base text-gray-900 block truncate">
                  {when}
                </span>
              </button>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {showWhenDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowWhenDropdown(false)}
                  />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-20 max-h-60 overflow-y-auto">
                    {timeOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setWhen(option);
                          setShowWhenDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Guests Field */}
          <div className="flex-1 relative">
            <label className="block text-xs sm:text-sm text-gray-500 mb-1">
              Guests
            </label>
            <div className="relative">
              <button
                onClick={() => {
                  setShowGuestsDropdown(!showGuestsDropdown);
                  setShowWhereDropdown(false);
                  setShowWhenDropdown(false);
                }}
                className="w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-sm sm:text-base text-gray-900 block truncate">
                  {guests}
                </span>
              </button>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              {showGuestsDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowGuestsDropdown(false)}
                  />
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-20 max-h-60 overflow-y-auto">
                    {guestOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setGuests(option);
                          setShowGuestsDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors text-sm sm:text-base cursor-pointer"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="button"
              className="
                w-full lg:w-auto
                bg-orange-600 hover:bg-orange-700
                text-white font-semibold
                px-6 sm:px-8 py-2.5 sm:py-3
                rounded-lg
                flex items-center justify-center gap-2
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                whitespace-nowrap
                cursor-pointer
              "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-sm sm:text-base">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
