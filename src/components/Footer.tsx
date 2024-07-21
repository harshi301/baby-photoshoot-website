// components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2">
              <Link href="/about" className="hover:text-mintGreen transition">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/services"
                className="hover:text-mintGreen transition"
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/blog" className="hover:text-mintGreen transition">
                Blog
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="hover:text-mintGreen transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p>Address: [Studio Address]</p>
          <p>Phone: [Studio Phone Number]</p>
          <p>
            Email:{" "}
            <a
              href="mailto:[Studio Email Address]"
              className="hover:text-mintGreen transition"
            >
              [Studio Email Address]
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-mintGreen transition">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-mintGreen transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-mintGreen transition">
              <FaPinterestP size={24} />
            </a>
            <a href="#" className="hover:text-mintGreen transition">
              <FaTwitter size={24} />
            </a>
          </div>
          <h4 className="text-lg font-bold mb-4">Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md mb-2 text-charcoal"
            />
            <button
              type="submit"
              className="w-full bg-mintGreen text-charcoal px-4 py-2 rounded-md transition hover:bg-gold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Harshi's DreamyPix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
