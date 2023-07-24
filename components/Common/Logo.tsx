import Link from "next/link";
import { FC } from "react";
import NextImage from "./NextImage";
import siteConfig from "@/config/site";

interface Props {}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <Link
      className="flex items-center gap-2"
      href={"/"}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {/* Logo */}
      <div className="relative w-9 h-9">
        <NextImage
          src={"/assets/logo3.png"}
          alt="Logo"
          className="rounded-lg"
        />
      </div>

      {/* Logo text */}
      <p className="cursor-pointer text-[22px] font-mono font-bold text-quaternary">
        <span>{siteConfig.siteName}</span>
      </p>
    </Link>
  );
};

export default Logo;
