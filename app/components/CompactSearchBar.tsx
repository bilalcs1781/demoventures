"use client";

import { useState } from "react";

interface CompactSearchBarProps {
  className?: string;
}

export default function CompactSearchBar({ className = "" }: CompactSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={`w-full max-w-xs sm:max-w-sm md:max-w-md ${className}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="
            w-full
            h-8 sm:h-9 md:h-10
            px-2 sm:px-3 md:px-4 pr-8 sm:pr-9 md:pr-10
            text-xs sm:text-sm
            rounded-lg
            border border-gray-200
            bg-white
            text-gray-900
            placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
            transition-all duration-200
            shadow-sm
          "
        />
        <button
          type="button"
          className="
            absolute right-1 sm:right-1.5 md:right-2 top-1/2 -translate-y-1/2
            h-6 w-6 sm:h-6 sm:w-6 md:h-7 md:w-7
            rounded-lg
            bg-orange-600 hover:bg-orange-700
            text-white
            flex items-center justify-center
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
          "
          aria-label="Search"
        >
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
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
        </button>
      </div>
    </div>
  );
}

