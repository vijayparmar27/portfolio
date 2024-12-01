"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ICONS, navConfig } from "../utils/navConfig";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(); // State to track active link
  const pathname = usePathname();

  useEffect(() => {
    navConfig.map((nav, navIndex) =>
      nav.items.map((link, linkIndex) => {
        if (link.href === pathname) {
          setActiveLink(`${navIndex}-${linkIndex}`);
        }
      })
    );
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="sm:block">
      <div className="shadow-smooth shadow-smooth-hover p-4 sm: md:hidden flex justify-between">
        <Link href="/" className="text-2xl font-bold">
          Vijay Parmar
        </Link>
        <button
          className=" focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {ICONS.menu}
        </button>
      </div>

      <nav
        className={`bg-background shadow-smooth shadow-smooth-hover h-screen w-64 fixed top-0 left-0 transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:block z-20 `}
      >
        <div className="flex flex-col items-start p-4 space-y-4">
          <Link href="/" className="text-2xl font-bold">
            Vijay Parmar
          </Link>

          {navConfig.map((nav, navIndex) => (
            <div
              key={`nav-${navIndex}`}
              className="w-full text-[--secondary-text-color]"
            >
              <h2 className="text-sm font-bold">{nav.subheader}</h2>
              {nav.items.map((link, linkIndex) => {
                const currentIndex = `${navIndex}-${linkIndex}`;
                return (
                  <Link
                    key={`link-${currentIndex}`}
                    href={link.href}
                    target={`${link.openNewPage ? "_blank" : ""}`}
                    className={`px-3 py-2 rounded-lg font-semibold text-sm leading-6 flex items-center hover:bg-slate-100 ${
                      activeLink === currentIndex
                        ? "bg-blue-100 text-[--primary-color]"
                        : ""
                    }`}
                  >
                    {link?.icon}
                    <span className="px-3">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Nav;
