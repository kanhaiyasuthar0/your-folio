import dbConnect from "@/database/mongodb/connections/dbConnect";
import ShowCaseNavbar from "../navbar/ShowcaseNavbar";
import User from "@/database/mongodb/models/user/user.schema";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";

const NavbarWrapper = async ({ userFolioId }: { userFolioId: string }) => {
  console.log("🚀 ~ NavbarWrapper2~ params:", userFolioId);
  //   console.log("🚀 ~ NavbarWrapper ~ params:", params);
  // const adminProfile = await AdminProfile.findOne({user : params})
  await dbConnect();
  const userData = await User.findOne({ _id: userFolioId });
  console.log("🚀 ~ ShowCaseNavbar ~ userData:", userData);
  const adminData = await AdminProfile.findOne({ user: userData.external_id });
  console.log("🚀 ~ ShowCaseNavbar ~ adminData:", adminData);

  return (
    <>
      <ShowCaseNavbar userFolioId={userFolioId} adminData={adminData} />
    </>
  );
};

export default NavbarWrapper;
