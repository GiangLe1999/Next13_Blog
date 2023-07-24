import { FC } from "react";
import Link from "next/link";
import siteConfig from "@/config/site";
import { NewTab2 } from "@/icons";

interface Props {}

const CTACard: FC<Props> = (props): JSX.Element => {
  return (
    <div
      className="rounded-md bg-slate-10 md:h-[300px] md:gap-28 gap-10 py-10 px-6 relative
    overflow-hidden flex flex-col md:flex-row items-center"
    >
      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-pink-600 to-pink-700"></div>

      {/* Content container */}
      <div className="relative z-10 md:w-[60%]">
        <h3 className="text-xl font-bold text-white">
          Explore the IT World with me!
        </h3>
        <p className="max-w-md mt-2 text-sm text-white">
          Let’s subscribe my blog to take a closer look at the every aspect of
          the IT sector in today’s world!
        </p>

        {/* Form */}
        <form className="mt-6 flex items-center gap-2">
          <input
            placeholder="Your email"
            type="text"
            className="bg-white text-base rounded-md py-3 px-4 outline-none
            focus:ring-2 ring-neutral-600 w-full"
          />
          <button className="px-4 py-[13px] bg-neutral-900 rounded-md text-neutral-200 font-semibold">
            Subscribe
          </button>
        </form>
      </div>

      <div className="hidden xs:block relative z-10 space-y-2 flex-1">
        <h3 className="text-xl font-bold text-white">Follow me on socials</h3>
        <ul className="md:space-y-2 md:flex md:flex-col md:items-start flex flex-row items-center md:gap-0 gap-3">
          {siteConfig.socialsLinks.map((social, index) => (
            <li key={index} className="flex">
              <Link
                className="flex items-center gap-1 text-white text-sm"
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {index === 0 ? (
                  <social.icon className="w-[22px] h-[21px]" />
                ) : (
                  <social.icon className="w-6 h-6" />
                )}{" "}
                {social.name}
                <NewTab2 className="relative -left-1 -top-1 w-3 h-3" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CTACard;
