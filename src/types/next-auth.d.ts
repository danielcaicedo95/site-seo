import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Agregamos accessToken a la sesión
  }

  interface User extends DefaultUser {
    accessToken?: string;
  }
}
