import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/authOptions"; // Asegúrate de que la ruta sea correcta

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
