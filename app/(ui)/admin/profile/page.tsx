import { submitProfile } from "@/actions/submitAdminProfile.action";
import Button from "@/components/generics/Button";
import dbConnect from "@/database/mongodb/connections/dbConnect";
import AdminProfile from "@/database/mongodb/models/user/admin.schema";
import User from "@/database/mongodb/models/user/user.schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";
import { toast } from "react-toastify";

const Profile = async () => {
  const user = await currentUser();
  await dbConnect();
  const profileData = await AdminProfile.findOne({ user: user?.id });
  console.log("🚀 ~ Profile ~ profileData1:", profileData);
  const userData = await User.findOne({ external_id: user?.id });
  console.log("🚀 ~ Profile ~ userData: profile top", userData);
  //   const [formData, setFormData] = useState({
  //     companyName: "",
  //     displayName: "",
  //     socialAccounts: {},
  //     personalDescription: "",
  //     companyDescription: "",
  //     themeColor: "#ffffff", // Default white
  //     companyAddress: "",
  //     status: "", // active, on leave, etc.
  //     mobileNumber: "",
  //     emailAddress: "",
  //     youtubeVideoUrl: "",
  //   });

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSocialAccountChange = (platform, value) => {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       socialAccounts: {
  //         ...prevState.socialAccounts,
  //         [platform]: value,
  //       },
  //     }));
  //   };

  const handleSubmit = async (formData: FormData) => {
    "use server";
    const response = await submitProfile(formData);
    console.log("🚀 ~ handleSubmit ~ response:123", response);
    // toast.success("Profile updated successfully!");
    console.log(userData, "inhandlesubmit after");
    revalidatePath(`/showcase/folioUsers/${userData?._id}`);
    // redirect("/admin")
    // Submit form logic here
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 lg:p-8 my-6 mx-4 md:mx-8">
      <form action={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Profile Settings
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            defaultValue={profileData?.companyName}
            name="companyName"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Display Name
          </label>
          <input
            defaultValue={profileData?.displayName}
            name="displayName"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Personal Description
          </label>
          <textarea
            defaultValue={profileData?.personalDescription}
            name="personalDescription"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Description
          </label>
          <textarea
            defaultValue={profileData?.companyDescription}
            name="companyDescription"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Theme Color
          </label>
          <input
            defaultValue={profileData?.themeColor}
            name="themeColor"
            type="color"
            className="mt-1 block w-16 border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Address
          </label>
          <input
            defaultValue={profileData?.companyAddress}
            name="companyAddress"
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            defaultValue={profileData?.status}
            name="status"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            defaultValue={profileData?.mobileNumber}
            name="mobileNumber"
            type="tel"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            defaultValue={profileData?.emailAddress}
            name="emailAddress"
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            YouTube Video URL
          </label>
          <input
            defaultValue={profileData?.youtubeVideoUrl}
            name="youtubeVideoUrl"
            type="url"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Quotation
          </label>
          <input
            defaultValue={profileData?.quotation}
            name="quotation"
            type="url"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Social Accounts
            </label>
            <input
              defaultValue={profileData?.socialAccounts["facebook"]}
              name="socialAccounts[facebook]"
              placeholder="Facebook URL"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <input
              defaultValue={profileData?.socialAccounts["twitter"]}
              name="socialAccounts[twitter]"
              placeholder="Twitter URL"
              type="text"
              className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            <input
              defaultValue={profileData?.socialAccounts["linkedin"]}
              name="socialAccounts[linkedin]"
              placeholder="LinkedIn URL"
              type="text"
              className="mt-4 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {/* Repeat for other social platforms as needed */}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              name="profilePicture"
              type="file"
              className="mt-1 block w-full"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button text="Save Changes" />

          {/* <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Profile;
