import Link from "next/link";

// Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
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
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} YourFolio —
          <a
            href="https://twitter.com/yourhandle"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SutharKanhaiya
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-400" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="ml-3 text-gray-400" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="ml-3 text-gray-400" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="ml-3 text-gray-400" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="ml-3 text-gray-400" href="#">
            <i className="fab fa-github"></i>
          </a>
          <Link className="ml-3 text-gray-400" href="/termsandconditions">
            Terms and Conditions
          </Link>
          <div className="ml-5 mr-2"> | </div>
          <Link className="ml-3 text-gray-400" href="/privacypolicy">
            Privacy Policy
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
