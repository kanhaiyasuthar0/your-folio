"use client";
// import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const ShowCaseNavbar = () => {
  const pathname = usePathname();

  //   // Check if the current path starts with /showcase/something
  const shouldShowChildNavbar = pathname.startsWith("/showcase/folioUsers/");

  if (!shouldShowChildNavbar) {
    return null; // Don't render the child navbar if not in /showcase/something
  }

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo/Brand name on the left */}
        <div>
          <>
            <Link href="/" className="text-xl font-bold cursor-pointer">
              Shri Dev Krupa
            </Link>
          </>
        </div>

        {/* Navigation links on the right */}
        <div className="flex items-center gap-8">
          <>
            <Link
              href="/showcase/folioUsers/userId"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              About
            </Link>
          </>

          <>
            <Link
              href="/showcase/folioUsers/userId"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Profile
            </Link>
          </>

          <>
            <Link
              href="/showcase/folioUsers/userId"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Projects
            </Link>
          </>

          <>
            <Link
              href="/showcase/folioUsers/userId"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Contact
            </Link>
          </>

          <>
            <Link
              href="/showcase/folioUsers/userId"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              Team
            </Link>
          </>
        </div>
      </div>
    </nav>
  );
};

export default ShowCaseNavbar;
