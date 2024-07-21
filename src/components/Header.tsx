// components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@heroicons/react/outline";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-ivory shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lavender font-serif text-2xl transition hover:text-gold cursor-pointer"
        >
          Harshi's DreamyPix
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/about"
            className="text-lavender font-sans transition hover:text-gold cursor-pointer"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-lavender font-sans transition hover:text-gold cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-lavender font-sans transition hover:text-gold cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            href="/packages"
            className="text-lavender font-sans transition hover:text-gold cursor-pointer"
          >
            Packages
          </Link>
          <Link
            href="/testimonials"
            className="text-lavender font-sans transition hover:text-gold cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="text-lavender font-sans transition hover:text-gold cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-lavender font-sans transition hover:text-gold cursor-pointer"
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <MenuIcon
            className="h-8 w-8 text-charcoal cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
