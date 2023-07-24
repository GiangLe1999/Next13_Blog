"use client";

import { FC } from "react";
import siteConfig from "@/config/site";
import Link from "next/link";
import Container from "../Container";
import Logo from "@/components/Common/Logo";
import Info from "./Info";

interface Props {}

const Footer: FC<Props> = (props): JSX.Element => {
  return (
    <div className="pt-8 pb-2 header-gradient dark:bg-none dark:bg-white-100 mt-10">
      <Container>
        <div className="">
          <Logo />
        </div>

        <div className="mt-6">
          <Info />
        </div>

        {/* Bottom section */}
        <div className="flex flex-wrap items-center gap-4 justify-between border-t border-neutral-600 dark:border-neutral-300 py-3 mt-10">
          <div className="text-sm text-neutral-400">
            © Copyright {new Date().getFullYear()} | All Rights Reserved.
          </div>

          <div className="text-sm text-neutral-400">
            Made with love by&nbsp;
            <Link
              target="_blank"
              className="border-b border-neutral-400"
              href="https://github.com/GiangLe1999"
            >
              @GiangLe1999
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
