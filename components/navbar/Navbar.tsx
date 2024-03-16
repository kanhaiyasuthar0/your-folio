"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            {/* You can replace the SVG with your logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">YourFolio</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {isSignedIn && user && (
            <Link href="/admin">
              <span className="hover:text-indigo-500 cursor-pointer">
                Admin
              </span>
            </Link>
          )}
          {!isSignedIn && !user && (
            <Link href="/">
              <span className="hover:text-indigo-500 cursor-pointer">Home</span>
            </Link>
          )}
          <Link href="/about">
            <span className="hover:text-indigo-500 cursor-pointer">About</span>
          </Link>
          <Link href="/services">
            <span className="hover:text-indigo-500 cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/showcase">
            <span className="hover:text-indigo-500 cursor-pointer">
              Showcase
            </span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-indigo-500 cursor-pointer">
              Contact
            </span>
          </Link>
          <Link href="/showcase/folioUsers">
            <span className="hover:text-indigo-500 cursor-pointer">
              Community
            </span>
          </Link>
          <Link href="/showcase/requirements">
            <span className="hover:text-indigo-500 cursor-pointer">
              Requirements
            </span>
          </Link>
          {!isSignedIn && !user && (
            <Link href="/admin">
              <span className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer">
                Get Started
              </span>
            </Link>
          )}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          {/* <button className="outline-none mobile-menu-button">
            SVG for mobile menu icon
          </button> */}
          <button
            className="outline-none mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-controls="mobile-menu"
          >
            {/* SVG for mobile menu icon */}
            {/* Add an SVG icon for the menu or use a text like 'Menu' as a placeholder */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <ul>
          {isSignedIn && user && (
            <li>
              <Link href="/admin">
                <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                  Admin
                </span>
              </Link>
            </li>
          )}
          <li>
            <Link href="/">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Services
              </span>
            </Link>
          </li>
          <li>
            <Link href="/showcase">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Showcase
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link href="/showcase/folioUsers">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Community
              </span>
            </Link>
          </li>
          <li>
            <Link href="/requirements">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Requirements
              </span>
            </Link>
          </li>
          <li className="p-2">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
          <li>
            <Link href="/admin">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 text-indigo-500 cursor-pointer">
                Get Started
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
