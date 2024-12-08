import type {  } from "next-auth/jwt";

// Session を拡張
declare module "next-auth" {
  interface Session {
    idToken: string;
  }
}

// JWT を拡張
declare module "next-auth/jwt" {
  interface JWT {
    idToken: string;
  }
}