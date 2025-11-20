"use client";

import { useState } from "react";

interface SearchBarProps {
  isInNavbar?: boolean;
  className?: string;
}

export default function SearchBar({ isInNavbar = false, className = "" }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`
        transition-all duration-300 ease-in-out
        ${isInNavbar ? "w-full max-w-md" : "w-full max-w-2xl"}
        ${className}
      `}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`
            w-full
            ${isInNavbar ? "h-10 px-4 text-sm" : "h-12 px-5 text-base"}
            rounded-full
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200
            shadow-sm hover:shadow-md
          `}
        />
        <button
          type="button"
          className={`
            absolute right-2 top-1/2 -translate-y-1/2
            ${isInNavbar ? "h-8 w-8" : "h-10 w-10"}
            rounded-full
            bg-blue-500 hover:bg-blue-600
            text-white
            flex items-center justify-center
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          `}
          aria-label="Search"
        >
          <svg
            className={`${isInNavbar ? "w-4 h-4" : "w-5 h-5"}`}
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

