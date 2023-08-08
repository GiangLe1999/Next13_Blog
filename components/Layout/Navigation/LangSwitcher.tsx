"use client";

import { ArrowDown, ArrowUp } from "@/components/Assets/Icons";
import NextImage from "@/components/Common/NextImage";
import useDropdown from "@/hook/useDropdown";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface Props {
  locale: string;
}

const common = "absolute transition-all cate-shadow";

const LangSwitcher: FC<Props> = ({ locale }): JSX.Element => {
  // Nhận về pathName hiện tại (Đã sử dụng Hook thì LangSwitcher sẽ thành Client Component)
  const targetLanguage = locale === "en" ? "vi" : "en";
  const { pathName, show, setShow, innerRef } = useDropdown();

  const searchParams = useSearchParams();
  const query = searchParams.get("search") as string;

  const redirectTaget = () => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = targetLanguage;

    if (query) {
      return segments.join("/") + "?search=" + query;
    }

    return segments.join("/");
  };

  return (
    <>
      <div
        ref={innerRef}
        className="relative cursor-pointer text-sm font-semibold"
        onClick={() => setShow(true)}
      >
        <div className="flex items-center gap-1">
          <div className="relative w-5 h-5">
            <NextImage src={"/assets/lang/" + locale + ".png"} alt={locale} />
          </div>
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

        <ul
          style={{
            transform: show ? "scale(1)" : "scale(0)",
            transformOrigin: "30px -10px",
          }}
          className={`${common} -bottom-11 -left-[8px] py-1 pl-2 pr-3 flex
       bg-white dark:text-white rounded`}
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
