import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import ShowCaseNavbar from "../navbar/ShowcaseNavbar";
import { currentUser } from "@clerk/nextjs/server";

const NavbarWrapper = async ({ userFolioId }: { userFolioId: string }) => {
  console.log("🚀 ~ NavbarWrapper2~ params:", userFolioId);
  //   console.log("🚀 ~ NavbarWrapper ~ params:", params);
  // const adminProfile = await AdminProfile.findOne({user : params})
  return (
    <>
      <ShowCaseNavbar userFolioId={userFolioId} />
    </>
  );
};

export default NavbarWrapper;
