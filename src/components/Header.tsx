import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-lavender p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-charcoal text-3xl font-bold">
          Harshi's Dreamy Pix
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-charcoal hover:text-mint-green">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-charcoal hover:text-mint-green"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-charcoal hover:text-mint-green"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
