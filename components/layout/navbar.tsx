"use client";

import Link from "next/link";
import Image from "next/image";
import { SignupLoginButtons } from "../auth";
import { ThemeToggle } from "../theme";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={menuRef}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/ez-logo.png"
                alt="EZ Quiz Maker"
                width={200}
                height={28}
                priority
                style={{ height: "auto" }}
                className="w-auto dark:invert dark:brightness-200"
              />
            </Link>
          </div>

          {/* Desktop - Auth Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <SignupLoginButtons />
          </div>

          {/* Mobile - Hamburger Menu */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-colors shadow-sm focus:outline-none "
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden pb-4 pt-2 space-y-4">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between px-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Theme
              </span>
              <ThemeToggle />
            </div>

            {/* Auth Buttons */}
            <div className="px-2 flex justify-end">
              <SignupLoginButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
