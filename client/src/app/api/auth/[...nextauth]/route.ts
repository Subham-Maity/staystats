import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import connectDB from "@/utils/db";
// import User from "@/models/User";     
// import bcrypt from "bcryptjs";            

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      // @ts-ignore
      async authorize(credentials) {
        // await connectDB();
        // try {
        //     console.log(credentials);
        //   const user = await User.findOne({ username: credentials.username });
        //   if (user) {
        //     const isValid = await bcrypt.compare(credentials.password, user.password)
        //     if (isValid) {
        //       return {
        //         id: user._id,
        //         username: user.username,
        //       };
        //     } else { 
        //       throw new Error("Invalid password");
        //     }
        //   } else {
        //     throw new Error("User not found");
        //   }
        // } catch (e) {
        //     console.log(e);
        //   throw new Error(e.message);
        // }
        return {credentials};
      },
    }),
  ],
  pages: {
    error: "/login",
  },
});


export { handler as GET, handler as POST };
