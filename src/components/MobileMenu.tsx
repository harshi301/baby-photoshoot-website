// components/MobileMenu.tsx
import React, { useState } from "react";
import Link from "next/link";
import { XIcon } from "@heroicons/react/outline";

interface MobileMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsOpen }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={"fixed inset-0 bg-black bg-opacity-50 z-40"}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={
          "fixed top-0 right-0 w-64 bg-ivory h-full z-50 transform translate-x-0 transition-transform"
        }
      >
        <div className="flex justify-end p-4">
          <XIcon
            className="h-8 w-8 text-lavender"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link
            href="/about"
            className="text-lavender font-sans transition hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-lavender font-sans transition hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="text-lavender font-sans transition hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/packages"
            className="text-lavender font-sans transition hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            Packages
          </Link>
          <Link
            href="/testimonials"
            className="text-lavender font-sans transition hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/blog"
            className="text-lavender font-sans transition hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-lavender font-sans transition hover:text-gold"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
