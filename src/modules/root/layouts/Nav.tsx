import React from "react";
import Link from "next/link";
import { navConfig } from "../utils/navConfig";

const Nav = () => {
  return (
    <nav className="bg-blue-600 text-white h-screen w-64">
      <div className="flex flex-col items-start p-4 space-y-4">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        {navConfig.map((nav) => (
          <div key={nav.subheader}>
            <h2 key={nav.subheader} className="text-sm font-bold">
              {nav.subheader}
            </h2>
            {nav.items.map((link) => (
              <>
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:bg-blue-700 px-3 py-2 w-full rounded-md text-sm font-medium flex items-center"
                >
                  {link?.icon}
                  <h3 className="px-3">{link.title}</h3>
                </Link>
              </>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
