import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import dbConnect from "./dbConnect";
import User from "@/model/user";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      async profile(profile) {
        await dbConnect();
        //Kiểm tra có phải old user không
        const oldUser = await User.findOne({ email: profile.email });
        //Nếu không phải old user thì lưu vào DB
        if (!oldUser) {
          const newUser = new User({
            name: profile.name || profile.login,
            email: profile.email,
            provider: "github",
            avatar: profile.avatar_url,
          });

          await newUser.save();
        }

        return profile;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      //Fetch về data cần thiết để update session
      await dbConnect();
      const user = await User.findOne({ email: session.user?.email });
      if (user)
        session.user = {
          id: user._id.toString(),
          name: user.name,
          avatar: user.avatar,
          email: user.email,
          role: user.role,
        } as any;

      return session;
    },
  },
};
