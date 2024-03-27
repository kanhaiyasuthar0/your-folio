"use client";
// import { useRouter } from "next/router";
// import dbConnect from "@/database/mongodb/connections/dbConnect";
// import AdminProfile from "@/database/mongodb/models/user/admin.schema";
// import User from "@/database/mongodb/models/user/user.schema";
// import { currentUser } from "@clerk/nextjs/server";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ShowCaseNavbar = ({
  userFolioId,
  adminData,
}: {
  userFolioId: string;
  adminData: any;
}) => {
  console.log("🚀 ~ adminData:13", adminData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // console.log("🚀 ~ ShowCaseNavbar4 ~ userFolioId:", userFolioId);
  // console.log("🚀 ~ ShowCaseNavbar1 ~ params:", params);
  // const user = await currentUser();
  // await dbConnect();
  // const userData = await User.findOne({ _id: userFolioId });
  // console.log("🚀 ~ ShowCaseNavbar ~ userData:", userData);
  // const adminData = await AdminProfile.findOne({ user: userData.external_id });
  // console.log("🚀 ~ ShowCaseNavbar ~ adminData:", adminData);
  // console.log("🚀 ~ ShowCaseNavbar ~ user:", adminData);
  // const pathname = usePathname();
  // console.log("🚀 ~ ShowCaseNavbar ~ pathname:", pathname);

  //   // Check if the current path starts with /showcase/something
  // const shouldShowChildNavbar = pathname.startsWith("/showcase/folioUsers/");

  // if (!shouldShowChildNavbar) {
  //   return null; // Don't render the child navbar if not in /showcase/something
  // }
  // useEffect(() => {
  //   "use server";

  // }, []);
  // const isMobileMenuOpen = false;

  const { themeColor = "" } = adminData || {}; // Assuming themeColor is defined somewhere in your component or state
  const someCss = `bg-[${themeColor}]`;
  // const navClass = ;

  return (
    // <nav
    //   style={{ "--theme-color": themeColor } as React.CSSProperties}
    //   className={clsx("text-white shadow-md bg-blue-900", {
    //     [someCss]: themeColor,
    //     "bg-blue-900": !themeColor,
    //   })}
    // >
    //   <div className="container mx-auto flex items-center justify-between py-2 px-4">
    //     {/* Logo/Brand name on the left */}
    //     <div>
    //       <>
    //         <Link
    //           href={`/showcase/folioUsers/${userFolioId}`}
    //           className="text-xl font-bold cursor-pointer"
    //         >
    //           {adminData && adminData?.profilePicture ? (
    //             <span
    //               style={{ display: "flex", alignItems: "center", gap: "20px" }}
    //             >
    //               <Image
    //                 src={adminData.profilePicture}
    //                 height={50}
    //                 width={50}
    //                 alt={adminData?.companyName}
    //               />
    //               {adminData?.companyName}
    //             </span>
    //           ) : (
    //             adminData?.companyName ?? ""
    //           )}
    //         </Link>
    //       </>
    //     </div>

    //     {/* Navigation links on the right */}
    //     <div className="flex items-center gap-8">
    //       <>
    //         <Link
    //           href={`/showcase/folioUsers/${userFolioId}/projects`}
    //           className="hover:text-blue-300 transition-colors duration-200"
    //         >
    //           Projects
    //         </Link>
    //       </>
    //       <>
    //         <Link
    //           href={`/showcase/folioUsers/${userFolioId}/profile`}
    //           className="hover:text-blue-300 transition-colors duration-200"
    //         >
    //           Profile
    //         </Link>
    //       </>
    //       <>
    //         <Link
    //           href={`/showcase/folioUsers/${userFolioId}/about`}
    //           className="hover:text-blue-300 transition-colors duration-200"
    //         >
    //           About
    //         </Link>
    //       </>

    //       <>
    //         <Link
    //           href={`/showcase/folioUsers/${userFolioId}/contact`}
    //           className="hover:text-blue-300 transition-colors duration-200"
    //         >
    //           Contact
    //         </Link>
    //       </>

    //       <>
    //         <Link
    //           href={`/showcase/folioUsers/${userFolioId}/team`}
    //           className="hover:text-blue-300 transition-colors duration-200"
    //         >
    //           Team
    //         </Link>
    //       </>
    //       <>
    //         <Link
    //           href={`/admin/dashboard`}
    //           className="hover:text-blue-300 transition-colors duration-200"
    //         >
    //           Login
    //         </Link>
    //       </>
    //     </div>
    //   </div>
    // </nav>
    <nav
      style={{ "--theme-color": themeColor } as React.CSSProperties}
      className={clsx("text-white shadow-md bg-blue-900", {
        [someCss]: themeColor,
        "bg-blue-900": !themeColor,
      })}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo/Brand name */}
        <div className="flex items-center">
          <Link
            href={`/showcase/folioUsers/${userFolioId}`}
            className="text-xl font-bold cursor-pointer flex items-center gap-2"
          >
            {adminData && adminData?.profilePicture ? (
              <>
                <Image
                  src={adminData.profilePicture}
                  height={40}
                  width={40}
                  alt={adminData?.companyName}
                />
                {adminData?.companyName}
              </>
            ) : (
              adminData?.companyName ?? ""
            )}
          </Link>
        </div>

        {/* Hamburger menu for mobile view */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {/* Icon for menu toggle */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={clsx("hidden md:flex items-center gap-8", {
            flex: isMobileMenuOpen,
            hidden: !isMobileMenuOpen,
          })}
        >
          <Link
            href={`/showcase/folioUsers/${userFolioId}/projects`}
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href={`/showcase/folioUsers/${userFolioId}/profile`}
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Profile
          </Link>
          <Link
            href={`/showcase/folioUsers/${userFolioId}/about`}
            className="hover:text-blue-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href={`/showcase/folioUsers/${userFolioId}/contact`}
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href={`/showcase/folioUsers/${userFolioId}/team`}
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Team
          </Link>
          <Link
            href={`/admin/dashboard`}
            className="hover:text-blue-300 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-900">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href={`/showcase/folioUsers/${userFolioId}/projects`}
              className="block hover:text-blue-300 transition-colors duration-200 text-white"
            >
              Projects
            </Link>
            <Link
              href={`/showcase/folioUsers/${userFolioId}/profile`}
              className="block hover:text-blue-300 transition-colors duration-200 text-white"
            >
              Profile
            </Link>
            <Link
              href={`/showcase/folioUsers/${userFolioId}/about`}
              className="block hover:text-blue-300 transition-colors duration-200 text-white"
            >
              About
            </Link>
            <Link
              href={`/showcase/folioUsers/${userFolioId}/contact`}
              className="block hover:text-blue-300 transition-colors duration-200 text-white"
            >
              Contact
            </Link>
            <Link
              href={`/showcase/folioUsers/${userFolioId}/team`}
              className="block hover:text-blue-300 transition-colors duration-200 text-white"
            >
              Team
            </Link>
            <Link
              href={`/admin/dashboard`}
              className="block hover:text-blue-300 transition-colors duration-200 text-white"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ShowCaseNavbar;
