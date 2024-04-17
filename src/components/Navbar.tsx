import React from "react";
import Link from "next/link";

interface Links {
  links: string[];
  activeSection: string;
}

export default function Navbar({ links, activeSection }: Links) {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={`#${link}`} legacyBehavior>
              <a
                className={`group flex py-3 ${
                  activeSection === link ? "active" : ""
                }`}
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-current transition-all group-hover:w-16 group-hover:bg-current group-focus-visible:w-16 group-focus-visible:bg-current motion-reduce:transition-none"></span>

                <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-current group-focus-visible:text-current">
                  {link}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
