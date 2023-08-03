import { UserProfile } from "@/types/collection";
import { useSession } from "next-auth/react";

const useAuth = () => {
  const { data } = useSession();
  const user = data?.user;
  if (user) return user as UserProfile;
};

export default useAuth;
