"use server";

import AdminProfile from "@/database/mongodb/models/user/admin.schema";

export default async function getUserData(externalId: string) {
  console.log("🚀 ~ getUserData ~ externalId:", externalId);
  const profileData = await AdminProfile.findOne({ user: externalId });
  // let url = process.env.BASE_URL + "/api/user/getdata/" + user?.id;
  // const response = await fetch(url, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // const data = await response.json();
  // console.log("🚀 ~ getData ~ data:", data);

  return profileData;
}
