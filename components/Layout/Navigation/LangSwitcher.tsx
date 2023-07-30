"use client";

import { ArrowDown } from "@/components/Assets/Icons";
import NextImage from "@/components/Common/NextImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  locale: string;
}

const LangSwitcher: FC<Props> = ({ locale }): JSX.Element => {
  // Nhận về pathName hiện tại (Đã sử dụng Hook thì LangSwitcher sẽ thành Client Component)
  const targetLanguage = locale === "en" ? "vi" : "en";
  const pathName = usePathname();
  const redirectTaget = () => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = targetLanguage;
    return segments.join("/");
  };

  return (
    <>
      <div className="relative group cursor-pointer text-sm font-semibold">
        <div className="flex items-center gap-1">
          <div className="relative w-5 h-5">
            <NextImage src={"/assets/lang/" + locale + ".png"} alt={locale} />
          </div>
          <ArrowDown className="w-2 h-2 relative text-white dark:text-neutral-600" />
        </div>
        <ul
          className="absolute top-full py-1 pl-1 pr-2 -left-[4px] hidden group-hover:flex
       dark:bg-white shadow bg-white-100 dark:text-white rounded"
        >
          <li>
            <Link href={redirectTaget()} className="flex items-center gap-1">
              <div className="relative w-5 h-5">
                <NextImage
                  src={"/assets/lang/" + targetLanguage + ".png"}
                  alt={targetLanguage}
                />
              </div>
              <span className="text-xs text-neutral-600">
                {targetLanguage.toUpperCase()}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LangSwitcher;
