"use client";

import { ArrowDown, ArrowUp, GithubIcon } from "@/components/Assets/Icons";
import useDropdown from "@/hook/useDropdown";
import { FC } from "react";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import NextImage from "@/components/Common/NextImage";

interface Props {
  locale: string;
}

const common = "absolute transition-all cate-shadow";

const GitHubLogin: FC<Props> = ({ locale }): JSX.Element => {
  const { show, setShow, innerRef } = useDropdown();
  const { data: session } = useSession() as any;

  return (
    <div
      ref={innerRef}
      className="relative cursor-pointer text-sm font-semibold"
      onClick={() => setShow(true)}
    >
      <div className="flex items-center gap-1">
        {session ? (
          <div className="relative w-[23px] h-[23px] rounded-full overflow-hidden border border-secondary">
            <NextImage src={session.user?.avatar} alt={locale} />
          </div>
        ) : (
          <GithubIcon className="w-[22px] h-[22px] text-white dark:text-gray-700" />
        )}
        <ArrowDown className="w-3 h-3 relative text-white dark:text-neutral-600" />
      </div>

      <div
        className={`${common} -bottom-[22px] -right-[4px] text-white z-50`}
        style={{
          transform: show ? "scale(1)" : "scale(0)",
          transformOrigin: "12px -10px",
        }}
      >
        <ArrowUp className="w-5 h-5 z-50 transition-opacity" />
      </div>

      <div
        onClick={() => {
          session ? signOut() : signIn("github");
        }}
        style={{
          transform: show ? "scale(1)" : "scale(0)",
          transformOrigin: "30px -10px",
        }}
        className={`${
          session ? "w-[66px] px-2" : "w-[142px] px-3"
        } ${common} py-1 -bottom-11 -left-[8px] flex
       bg-white dark:text-gray-700 rounded`}
      >
        {session ? "Log out" : "Login with Github"}
      </div>
    </div>
  );
};

export default GitHubLogin;
