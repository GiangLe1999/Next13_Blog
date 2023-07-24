import { Dispatch, FC, SetStateAction } from "react";
import { usePathname } from "next/navigation";

import { navLinks } from "@/config/site";
import Link from "next/link";

interface Props {
  mobile?: boolean;
  setToggle?: Dispatch<SetStateAction<boolean>>;
}

const NavLinks: FC<Props> = ({ mobile, setToggle }): JSX.Element => {
  const pathName = usePathname();

  return (
    <ul
      className={`list-none ${
        mobile
          ? "flex justify-end items-start flex-col gap-4"
          : "hidden lg:flex flex-row gap-4"
      }`}
    >
      {navLinks.map((link, index) => (
        <li key={index} onClick={() => setToggle && setToggle(false)}>
          <Link
            className={`${
              pathName === link.link
                ? "text-quaternary font-bold text-[17px] border-2 border-quaternary"
                : "text-white dark:lg:text-neutral-600 dark:text-white font-medium"
            } cursor-pointer text-[16px] px-2 py-1 rounded-md`}
            href={link.link}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
