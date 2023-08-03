import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { UserProfile } from "@/types/collection";

export const isAuth = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (user) return user as UserProfile;
};
