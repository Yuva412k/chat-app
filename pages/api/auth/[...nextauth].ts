import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as any,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
    }),
    // ...add more providers here
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text ", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req){
        const {email, password} = credentials as {email:string, password: string};

        if(email != "admin" && password != "password"){
          throw Error("Invalid Credentials");
        }

        return {id: "1", name: "admin", email: "admin@admin.com"}
      }
    }),
  ],

  callbacks: {
    async session({ session, token, user }: any) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },

  secret: process.env.NEXT_PUBLIC_SECRET,
});
