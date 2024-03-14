// "use client";
// import { useRouter } from "next/router";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";

const ShowCaseNavbar = async ({ userFolioId }: { userFolioId: string }) => {
  console.log("🚀 ~ ShowCaseNavbar4 ~ userFolioId:", userFolioId);
  // console.log("🚀 ~ ShowCaseNavbar1 ~ params:", params);
  // const user = await currentUser();

  const userData = await User.findOne({ _id: userFolioId });
  const adminData = await AdminProfile.findOne({ user: userData.external_id });
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

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo/Brand name on the left */}
        <div>
          <>
            <Link
              href={`/showcase/folioUsers/${userFolioId}`}
              className="text-xl font-bold cursor-pointer"
            >
              {adminData.profilePicture ? (
                <span
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Image
                    src={adminData.profilePicture}
                    height={50}
                    width={50}
                    alt={adminData?.companyName}
                  />
                  {adminData?.companyName}
                </span>
              ) : (
                adminData?.companyName
              )}
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
