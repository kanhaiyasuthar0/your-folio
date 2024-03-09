import type { NextAuthConfig } from "next-auth";
// import { adapter, getUser } from "./auth";
export default {
  pages: {
    signIn: `${process.env.BASE_URL}/auth/login`,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      //   const isLoggedIn = !!auth?.user;
      //   const isOnDashboard = nextUrl.pathname.startsWith("/");

      //   if (isOnDashboard) {
      //     if (isLoggedIn) return true;
      //     return false; // Redirect unauthenticated users to login page
      //   } else if (isLoggedIn) {
      //     return Response.redirect(new URL("/dashboard", nextUrl));
      //   }

      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
