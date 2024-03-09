import NextAuth from "next-auth";
import authConfig from "./auth.config";
import Credentials from "next-auth/providers/credentials";

type Credential = {
  email: string;
  password: string;
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  //   adapter: MongoDBAdapter(clientPromise),
  ...authConfig,
  providers: [
    Credentials({
      async authorize(
        credentials: any
        // { email: string; password: string }
      ) {
        console.log(credentials, "creds");
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }

        const response = await fetch(`${process.env.BASE_URL}/api/user/login`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const finalJson = await response.json();
        console.log("🚀 ~ authorize ~ finalJson:", finalJson);
        if (finalJson) {
          return {
            email: email,
            name: email,
          };

          // await dbConnect();
          // // const db = await connectToDatabase();
          // // const collection = db.collection("users");
          // // const adapter = await MongoDBAdapter(clientPromise);
          // const user = await UserModel.findOne({ email });
          // console.log("🚀 ~ POST ~ user:", user, password);

          // if (user) {
          //   const result = await bcrypt.compare(password, user.password);
          //   console.log("🚀 ~ authorize ~ result:", result);
          //   if (result) {
          //     return {
          //       email: email,
          //       name: email,
          //     };
          //   }
        } else {
          return null;
        }
      },
    }),
  ],
});
