"use client";
import { useState } from "react";
import Link from "next/link";
import { navConfig } from "../utils/navConfig";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sm:block">
      {/* Mobile Header with Hamburger */}
      <div className="bg-[#001233] text-white p-4 sm: md:hidden flex ">
        <Link href="/" className="text-2xl font-bold">
          Logo1
        </Link>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
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
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`bg-neutral-950 text-white h-screen w-64 fixed top-0 left-0 transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:block z-10`}
        // style={{ zIndex: 9999999 }}
      >
        <div className="flex flex-col items-start p-4 space-y-4">
          <Link href="/" className="text-2xl font-bold">
            Logo
          </Link>

          {navConfig.map((nav, navIndex) => (
            <div key={`nav-${navIndex}`}>
              <h2 className="text-sm font-bold">{nav.subheader}</h2>
              {nav.items.map((link, linkIndex) => (
                <Link
                  key={`link-${navIndex}-${linkIndex}`} // Combine parent and child indexes for unique key
                  href={link.href}
                  className="hover:bg-blue-700 px-3 py-2 w-full rounded-md text-sm font-medium flex items-center"
                >
                  {link?.icon}
                  <h3 className="px-3">{link.title}</h3>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          // style={{  }}
        ></div>
      )}
    </div>
  );
};

export default Nav;
