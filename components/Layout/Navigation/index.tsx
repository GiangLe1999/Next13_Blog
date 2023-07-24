"use client";
import Link from "next/link";
import Image from "next/image";

import { FC, useState } from "react";
import { menu, close } from "@/public/assets";
import Container from "../Container";
import NavLinks from "./NavLinks";
import ThemeButton from "./ThemeButton";
import Logo from "@/components/Common/Logo";

interface Props {}

const Navigation: FC<Props> = (props): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="py-4 w-full flex items-center fixed top-0 z-20 header-gradient
    dark:bg-none dark:bg-white-100 dark:shadow-md"
    >
      <Container>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center space-x-16">
            {/* Logo */}
            <Logo />

            {/* Nav links */}
            <NavLinks />
          </div>

          <div className="flex flex-1 justify-end items-center space-x-5">
            {/* Action button */}
            <div className="">
              <ThemeButton />
            </div>

            {/* Nav links on mobile */}
            <div className="lg:hidden">
              <Image
                src={toggle ? close : menu}
                alt="Menu"
                width={22}
                height={22}
                className="cursor-pointer object-contain"
                onClick={() => setToggle((prev) => !prev)}
              />
              <div
                className={`${
                  toggle ? "flex" : "hidden"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                <NavLinks mobile setToggle={setToggle} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
