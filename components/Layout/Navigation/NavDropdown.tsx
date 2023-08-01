"use client";

import { ArrowDown, ArrowUp } from "@/components/Assets/Icons";
import NextImage from "@/components/Common/NextImage";
import { categories } from "@/config/site";
import useDropdown from "@/hook/useDropdown";
import Link from "next/link";
import { FC } from "react";

const common = "absolute transition-all cate-shadow";

interface Props {}

const NavDropdown: FC<Props> = (props): JSX.Element => {
  const { show, setShow, innerRef } = useDropdown();

  return (
    <div ref={innerRef} className="relative" onClick={() => setShow(true)}>
      <ArrowDown className="cursor-pointer relative top-[1px] w-3 h-3" />

      <div
        className={`${common} -bottom-[35px] -right-[10px] text-white z-50`}
        style={{
          transform: show ? "scale(1)" : "scale(0)",
          transformOrigin: "18px 0px",
        }}
      >
        <ArrowUp className="w-8 h-8 z-50 transition-opacity" />
      </div>
      <ul
        style={{
          transform: show ? "scale(1)" : "scale(0)",
          transformOrigin: "80px -20px",
        }}
        className={`${common} w-80 py-4 px-6 grid grid-cols-2 gap-y-2 gap-x-8 bg-white -bottom-72 -left-20
        rounded-md z-40`}
      >
        {categories.map((category, index) => (
          <li
            key={index + category.name}
            style={{ backfaceVisibility: "hidden" }}
            className="group"
            onClick={() => setShow(false)}
          >
            <Link
              className="py-2 px-1 w-full capitalize group-hover:text-quaternary flex items-center gap-x-1
              text-gray-700 font-medium text-base
              "
              href={`/${category.link}`}
            >
              <div className="w-5 h-5 relative">
                <NextImage src={category.icon} alt={category.name} />
              </div>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDropdown;
