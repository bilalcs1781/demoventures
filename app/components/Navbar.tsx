"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CompactSearchBar from "./CompactSearchBar";

interface NavbarProps {
  isVisible: boolean;
}

export default function Navbar({ isVisible }: NavbarProps) {
  const [showListingDropdown, setShowListingDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-in-out
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
        style={{
          background: "linear-gradient(to right, #1e293b 0%, #7c2d12 100%)",
        }}
      >
        {/* Thin vertical blue line on the left */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500" />

        <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8 pl-3 sm:pl-5">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain sm:w-10 sm:h-10"
                priority
              />
            </div>

            {/* Search Bar - Center (Hidden on mobile, shown on tablet+) */}
            <div className="hidden md:flex flex-1 justify-center px-2 lg:px-4 max-w-md lg:max-w-2xl min-w-0 mx-2">
              <CompactSearchBar />
            </div>

            {/* Desktop Right Side Buttons (Hidden on mobile) */}
            <div className="hidden md:flex flex-shrink-0 items-center gap-2 lg:gap-3">
              {/* Add your listing button */}
              <div className="relative">
                <button
                  onClick={() => setShowListingDropdown(!showListingDropdown)}
                  className="
                    flex items-center gap-1.5
                    bg-white rounded-lg
                    px-3 lg:px-4 py-2
                    text-red-600 font-medium
                    hover:bg-gray-50
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent
                  "
                >
                  <span className="text-sm lg:text-base whitespace-nowrap">
                    Add your listing
                  </span>
                  <svg
                    className="w-4 h-4 flex-shrink-0"
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
                </button>

                {/* Dropdown menu */}
                {showListingDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowListingDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20 border border-gray-200">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowListingDropdown(false)}
                        >
                          Create Listing
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowListingDropdown(false)}
                        >
                          Manage Listings
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Language selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="
                    flex items-center gap-1
                    bg-white rounded-lg
                    px-2 lg:px-3 py-2
                    text-red-600 font-medium
                    hover:bg-gray-50
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent
                  "
                >
                  <span className="text-sm lg:text-base">EN</span>
                  <svg
                    className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0"
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
                </button>

                {/* Dropdown menu */}
                {showLanguageDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowLanguageDropdown(false)}
                    />
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-20 border border-gray-200">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowLanguageDropdown(false)}
                        >
                          English
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowLanguageDropdown(false)}
                        >
                          Español
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowLanguageDropdown(false)}
                        >
                          Français
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* User profile icon */}
              <button
                className="
                  bg-white rounded-lg
                  p-2
                  text-red-600
                  hover:bg-gray-50
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent
                "
                aria-label="User profile"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="
                md:hidden
                flex flex-col items-center justify-center
                w-10 h-10
                bg-white rounded-lg
                text-red-600
                hover:bg-gray-50
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-transparent
              "
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`
                  block w-5 h-0.5 bg-current transform transition-all duration-300
                  ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}
                `}
              />
              <span
                className={`
                  block w-5 h-0.5 bg-current mt-1 transition-all duration-300
                  ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              <span
                className={`
                  block w-5 h-0.5 bg-current mt-1 transform transition-all duration-300
                  ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}
                `}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-opacity duration-300 ease-in-out
          ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`
          fixed top-0 right-0 z-50
          w-80 max-w-[85vw] h-full
          bg-white
          shadow-2xl
          transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                p-2 rounded-lg
                text-gray-600 hover:text-gray-900 hover:bg-gray-100
                transition-colors duration-200
              "
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <CompactSearchBar />
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {/* Add your listing */}
            <div className="space-y-1">
              <button
                onClick={() => setShowListingDropdown(!showListingDropdown)}
                className="
                  w-full flex items-center justify-between
                  px-4 py-3 rounded-lg
                  bg-gray-50 hover:bg-gray-100
                  text-gray-900 font-medium
                  transition-colors duration-200
                "
              >
                <span>Add your listing</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    showListingDropdown ? "rotate-180" : ""
                  }`}
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
              </button>
              {showListingDropdown && (
                <div className="pl-4 space-y-1">
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setShowListingDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Create Listing
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setShowListingDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Manage Listings
                  </a>
                </div>
              )}
            </div>

            {/* Language selector */}
            <div className="space-y-1">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="
                  w-full flex items-center justify-between
                  px-4 py-3 rounded-lg
                  bg-gray-50 hover:bg-gray-100
                  text-gray-900 font-medium
                  transition-colors duration-200
                "
              >
                <span>Language (EN)</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    showLanguageDropdown ? "rotate-180" : ""
                  }`}
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
              </button>
              {showLanguageDropdown && (
                <div className="pl-4 space-y-1">
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setShowLanguageDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    English
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setShowLanguageDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Español
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setShowLanguageDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Français
                  </a>
                </div>
              )}
            </div>

            {/* User profile */}
            <button
              className="
                w-full flex items-center
                px-4 py-3 rounded-lg
                bg-gray-50 hover:bg-gray-100
                text-gray-900 font-medium
                transition-colors duration-200
              "
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                  clipRule="evenodd"
                />
              </svg>
              Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
