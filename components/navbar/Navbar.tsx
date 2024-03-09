import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold cursor-pointer">YourFolio</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/">
            <span className="hover:text-indigo-500 cursor-pointer">Home</span>
          </Link>
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
          <Link href="/auth/login">
            <span className="hover:text-indigo-500 cursor-pointer">Log In</span>
          </Link>
          <Link href="/auth/register">
            <span className="px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white cursor-pointer">
              Get Started
            </span>
          </Link>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            {/* SVG for mobile menu icon */}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="hidden mobile-menu">
        <ul>
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
            <Link href="/portfolio">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Portfolio
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
          <li>
            <Link href="/auth/login">
              <span className="block text-sm px-2 py-4 hover:bg-gray-800 cursor-pointer">
                Log In
              </span>
            </Link>
          </li>
          <li>
            <Link href="/auth/register">
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
